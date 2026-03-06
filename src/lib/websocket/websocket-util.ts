import WebSocket from 'isomorphic-ws';

import { WsTopic } from '../../types/websockets/client.js';
import { MessageEventLike } from '../requestUtils.js';

/**
 * Normalised internal format for a request (subscribe/unsubscribe/etc) on a topic, with optional parameters.
 *
 * - Topic: the topic this event is for
 * - Payload: the parameters to include, optional. E.g. auth requires key + sign. Some topics allow configurable parameters.
 * - Category: required for bybit, since different categories have different public endpoints
 */
export interface WsTopicRequest<
  TWSTopic extends string = string,
  TWSPayload = unknown,
> {
  topic: TWSTopic;
  payload?: TWSPayload;
}

/**
 * Conveniently allow users to request a topic either as string topics or objects (containing string topic + params)
 */
export type WsTopicRequestOrStringTopic<
  TWSTopic extends string,
  TWSPayload = unknown,
> = WsTopicRequest<TWSTopic, TWSPayload> | string;

/** Should be one WS key per unique URL */
export const WS_KEY_MAP = {
  spotPublicV1: 'spotPublicV1',
  spotPrivateV1: 'spotPrivateV1',
  futuresPublicV1: 'futuresPublicV1',
  futuresPrivateV1: 'futuresPrivateV1',
  futuresPublicV2: 'futuresPublicV2',
  futuresPrivateV2: 'futuresPrivateV2',
} as const;

/** This is used to differentiate between each of the available websocket streams */
export type WsKey = (typeof WS_KEY_MAP)[keyof typeof WS_KEY_MAP];

/**
 * Some exchanges have two livenet environments, some have test environments, some dont. This allows easy flexibility for different exchanges.
 * Examples:
 *  - One livenet and one testnet: NetworkMap<'livenet' | 'testnet'>
 *  - One livenet, sometimes two, one testnet: NetworkMap<'livenet' | 'testnet', 'livenet2'>
 *  - Only one livenet, no other networks: NetworkMap<'livenet'>
 */
type NetworkMap<
  TRequiredKeys extends string,
  TOptionalKeys extends string | undefined = undefined,
> = Record<TRequiredKeys, string> &
  (TOptionalKeys extends string
    ? Record<TOptionalKeys, string | undefined>
    : Record<TRequiredKeys, string>);

export const WS_BASE_URL_MAP: Record<WsKey, NetworkMap<'livenet', 'demo'>> = {
  spotPublicV1: {
    livenet: 'wss://ws-manager-compress.bitmart.com/api?protocol=1.1',
    demo: undefined,
  },
  spotPrivateV1: {
    livenet: 'wss://ws-manager-compress.bitmart.com/user?protocol=1.1',
    demo: undefined,
  },
  futuresPublicV1: {
    livenet: 'wss://openapi-ws.bitmart.com/api?protocol=1.1',
    demo: undefined,
  },
  futuresPrivateV1: {
    livenet: 'wss://openapi-ws.bitmart.com/user?protocol=1.1',
    demo: undefined,
  },
  futuresPublicV2: {
    livenet: 'wss://openapi-ws-v2.bitmart.com/api?protocol=1.1',
    demo: 'wss://openapi-wsdemo-v2.bitmart.com/api?protocol=1.1',
  },
  futuresPrivateV2: {
    livenet: 'wss://openapi-ws-v2.bitmart.com/user?protocol=1.1',
    demo: 'wss://openapi-wsdemo-v2.bitmart.com/user?protocol=1.1',
  },
};

export const WS_ERROR_ENUM = {
  INVALID_ACCESS_KEY: 'todo:',
};

export function neverGuard(x: never, msg: string): Error {
  return new Error(`Unhandled value exception "${x}", ${msg}`);
}

/**
 * ws.terminate() is undefined in browsers.
 * This only works in node.js, not in browsers.
 * Does nothing if `ws` is undefined. Does nothing in browsers.
 */
export function safeTerminateWs(
  ws?: WebSocket | any,
  fallbackToClose?: boolean,
): boolean {
  if (!ws) {
    return false;
  }
  if (typeof ws['terminate'] === 'function') {
    ws.terminate();
    return true;
  } else if (fallbackToClose) {
    ws.close();
  }

  return false;
}

/**
 * Users can conveniently pass topics as strings or objects (object has topic name + optional params).
 *
 * This method normalises topics into objects (object has topic name + optional params).
 */
export function getNormalisedTopicRequests(
  wsTopicRequests: WsTopicRequestOrStringTopic<string>[],
): WsTopicRequest<WsTopic>[] {
  const normalisedTopicRequests: WsTopicRequest<WsTopic>[] = [];

  for (const wsTopicRequest of wsTopicRequests) {
    // passed as string, convert to object
    if (typeof wsTopicRequest === 'string') {
      const topicRequest: WsTopicRequest<WsTopic> = {
        topic: wsTopicRequest,
        payload: undefined,
      };
      normalisedTopicRequests.push(topicRequest);
      continue;
    }

    // already a normalised object, thanks to user
    normalisedTopicRequests.push(wsTopicRequest);
  }
  return normalisedTopicRequests;
}

/**
 * WebSocket.ping() is not available in browsers. This is a simple check used to
 * disable heartbeats in browers, for exchanges that use native WebSocket ping/pong frames.
 */
export function isWSPingFrameAvailable(): boolean {
  return typeof WebSocket.prototype['ping'] === 'function';
}

/**
 * WebSocket.pong() is not available in browsers. This is a simple check used to
 * disable heartbeats in browers, for exchanges that use native WebSocket ping/pong frames.
 */
export function isWSPongFrameAvailable(): boolean {
  return typeof WebSocket.prototype['pong'] === 'function';
}

export async function decompressMessageEvent(
  event: MessageEventLike<Buffer<ArrayBufferLike>>,
): Promise<MessageEventLike<any>> {
  const data = event.data;
  if (typeof data === 'string') {
    return { ...event, data };
  }

  const ds = new DecompressionStream('deflate-raw');

  const dataStream = new Response(data).body;

  let decompressedStream: ReadableStream;
  if (!dataStream) {
    const uint8 = new Uint8Array(data);
    const rs = new ReadableStream({
      start(controller) {
        controller.enqueue(uint8);
        controller.close();
      },
    });
    decompressedStream = rs.pipeThrough(ds);
  } else {
    decompressedStream = (dataStream as ReadableStream).pipeThrough(ds);
  }

  return {
    ...event,
    type: 'message',
    data: await new Response(decompressedStream).text(),
  };
}

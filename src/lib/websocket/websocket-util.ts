import WebSocket from 'isomorphic-ws';

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

export const WS_BASE_URL_MAP: Record<WsKey, NetworkMap<'livenet'>> = {
  spotPublicV1: {
    livenet: 'wss://ws-manager-compress.bitmart.com/api?protocol=1.1',
  },
  spotPrivateV1: {
    livenet: 'wss://ws-manager-compress.bitmart.com/user?protocol=1.1',
  },
  futuresPublicV1: {
    livenet: 'wss://openapi-ws.bitmart.com/api?protocol=1.1',
  },
  futuresPrivateV1: {
    livenet: 'wss://openapi-ws.bitmart.com/user?protocol=1.1',
  },
  futuresPublicV2: {
    livenet: 'wss://openapi-ws-v2.bitmart.com/api?protocol=1.1',
  },
  futuresPrivateV2: {
    livenet: 'wss://openapi-ws-v2.bitmart.com/user?protocol=1.1',
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

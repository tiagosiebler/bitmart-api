import type { ClientRequestArgs } from 'http';
import WebSocket from 'isomorphic-ws';

/**
 * WS topics are always a string for bitmart. Some exchanges use complex objects
 */
export type WsTopic = string;

/**
 * Event args for subscribing/unsubscribing
 */

// export type WsTopicSubscribePrivateArgsV2 =
//   | WsTopicSubscribePrivateInstIdArgsV2
//   | WsTopicSubscribePrivateCoinArgsV2;

// export type WsTopicSubscribeEventArgsV2 =
//   | WsTopicSubscribePublicArgsV2
//   | WsTopicSubscribePrivateArgsV2;

/** General configuration for the WebsocketClient */
export interface WSClientConfigurableOptions {
  /** Your API key */
  apiKey?: string;

  /** Your API secret */
  apiSecret?: string;

  /** Your API memo (can be anything) that you included when creating this API key */
  apiMemo?: string;

  /** Define a recv window when preparing a private websocket signature. This is in milliseconds, so 5000 == 5 seconds */
  recvWindow?: number;

  /** How often to check if the connection is alive */
  pingInterval?: number;

  /** How long to wait for a pong (heartbeat reply) before assuming the connection is dead */
  pongTimeout?: number;

  /** Delay in milliseconds before respawning the connection */
  reconnectTimeout?: number;

  requestOptions?: {};

  wsOptions?: {
    protocols?: string[];
    agent?: any;
  } & Partial<WebSocket.ClientOptions | ClientRequestArgs>;

  wsUrl?: string;

  /**
   * Default: false. If true, use the simulated trading demo environment.
   * For V2 Futures WebSocket: wss://openapi-wsdemo-v2.bitmart.com
   * Note: The API keys for Simulated-Environment and Prod-Environment are the same.
   */
  demoTrading?: boolean;

  /**
   * Allows you to provide a custom "signMessage" function, e.g. to use node's much faster createHmac method
   *
   * Look in the examples folder for a demonstration on using node's createHmac instead.
   */
  customSignMessageFn?: (message: string, secret: string) => Promise<string>;
}

/**
 * WS configuration that's always defined, regardless of user configuration
 * (usually comes from defaults if there's no user-provided values)
 */
export interface WebsocketClientOptions extends WSClientConfigurableOptions {
  pingInterval: number;
  pongTimeout: number;
  reconnectTimeout: number;
  recvWindow: number;

  /**
   * If true, require a "receipt" that the connection is ready for use (e.g. a specific event type)
   */
  requireConnectionReadyConfirmation: boolean;
  authPrivateConnectionsOnConnect: boolean;
  authPrivateRequests: boolean;
  reauthWSAPIOnReconnect: boolean;

  /**
   * Whether to use native WebSocket ping/pong frames for heartbeats
   */
  useNativeHeartbeats: boolean;
}

export type WsMarket = 'spot' | 'futures';

/**
 * A midflight WS request event (e.g. subscribe to these topics).
 *
 * - requestKey: unique identifier for this request, if available. Can be anything as a string.
 * - requestEvent: the raw request, as an object, that will be sent on the ws connection. This may contain multiple topics/requests in one object, if the exchange supports it.
 */
export interface MidflightWsRequestEvent<TEvent = object> {
  requestKey: string;
  requestEvent: TEvent;
}

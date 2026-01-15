import WebSocket from 'isomorphic-ws';

import { REST_CLIENT_TYPE_ENUM, RestClientType } from './BaseRestClient.js';

export interface RestClientOptions {
  /** Your API key */
  apiKey?: string;

  /** Your API secret */
  apiSecret?: string;

  /** Your API memo (can be anything) that you included when creating this API key */
  apiMemo?: string;

  /**
   * Override the default/global max size of the request window (in ms) for signed api calls.
   * If you don't include a recv window when making an API call, this value will be used as default
   */
  recvWindow?: number;

  /** Default: false. If true, we'll throw errors if any params are undefined */
  strictParamValidation?: boolean;

  /**
   * Optionally override API protocol + domain
   * e.g baseUrl: 'https://api.bitmart.com'
   **/
  baseUrl?: string;

  /**
   * Default: false. If true, use the simulated trading demo environment.
   * For V2 Futures: https://demo-api-cloud-v2.bitmart.com
   * Note: The API keys for Simulated-Environment and Prod-Environment are the same.
   */
  demoTrading?: boolean;

  /** Default: true. whether to try and post-process request exceptions (and throw them). */
  parseExceptions?: boolean;

  /**
   * Allows you to provide a custom "signMessage" function, e.g. to use node's much faster createHmac method
   *
   * Look in the examples folder for a demonstration on using node's createHmac instead.
   */
  customSignMessageFn?: (message: string, secret: string) => Promise<string>;

  /**
   * Enable keep alive for REST API requests (via axios).
   */
  keepAlive?: boolean;

  /**
   * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
   * Only relevant if keepAlive is set to true.
   * Default: 1000 (defaults comes from https agent)
   */
  keepAliveMsecs?: number;
}

export function serializeParams<T extends Record<string, any> | undefined = {}>(
  params: T,
  strict_validation: boolean | undefined,
  encodeValues: boolean,
  prefixWith: string,
): string {
  if (!params) {
    return '';
  }

  const queryString = Object.keys(params)
    .sort()
    .map((key) => {
      const value = params[key];
      if (strict_validation === true && typeof value === 'undefined') {
        throw new Error(
          'Failed to sign API request due to undefined parameter',
        );
      }
      const encodedValue = encodeValues ? encodeURIComponent(value) : value;
      return `${key}=${encodedValue}`;
    })
    .join('&');

  // Only prefix if there's a value
  return queryString ? prefixWith + queryString : queryString;
}

export function getRestBaseUrl(
  useTestnet: boolean,
  restInverseOptions: RestClientOptions,
  restClientType: RestClientType,
): string {
  const exchangeBaseUrls = {
    livenetV1: 'https://api-cloud.bitmart.com',
    livenetV2: 'https://api-cloud-v2.bitmart.com',
    demoV2: 'https://demo-api-cloud-v2.bitmart.com',
    testnet: 'https://noTestnet',
  };

  if (restInverseOptions.baseUrl) {
    return restInverseOptions.baseUrl;
  }

  if (restInverseOptions.demoTrading) {
    // Demo environment is only available for V2 Futures
    if (restClientType === REST_CLIENT_TYPE_ENUM.mainV2) {
      return exchangeBaseUrls.demoV2;
    }
    // For V1, fall back to production
  }

  if (useTestnet) {
    return exchangeBaseUrls.testnet;
  }

  switch (restClientType) {
    case REST_CLIENT_TYPE_ENUM.mainV1: {
      return exchangeBaseUrls.livenetV1;
    }
    case REST_CLIENT_TYPE_ENUM.mainV2: {
      return exchangeBaseUrls.livenetV2;
    }
    default: {
      return exchangeBaseUrls.livenetV1;
    }
  }
}

export const APIID = 'bitmartapinode1';

export interface MessageEventLike<TDataType = string> {
  target: WebSocket;
  type: 'message';
  data: TDataType;
}

export function isCompressedMessageEvent(
  msg: unknown,
): msg is MessageEventLike<Buffer> {
  if (typeof msg !== 'object' || !msg) {
    return false;
  }

  const message = msg as MessageEventLike;
  return message['type'] === 'message' && Buffer.isBuffer(message['data']);
}

export function isMessageEvent(msg: unknown): msg is MessageEventLike {
  if (typeof msg !== 'object' || !msg) {
    return false;
  }

  const message = msg as MessageEventLike;
  return message['type'] === 'message' && typeof message['data'] === 'string';
}

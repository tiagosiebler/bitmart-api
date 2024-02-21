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

  /** Default: true. whether to try and post-process request exceptions (and throw them). */
  parseExceptions?: boolean;
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
): string {
  const exchangeBaseUrls = {
    livenet: 'https://api-cloud.bitmart.com',
    testnet: 'https://noTestnet',
  };

  if (restInverseOptions.baseUrl) {
    return restInverseOptions.baseUrl;
  }

  if (useTestnet) {
    return exchangeBaseUrls.testnet;
  }

  return exchangeBaseUrls.livenet;
}

export const APIID = 'bitmartapinode1';

export function isWsPong(msg: any): boolean {
  // bitmart
  if (msg?.data === 'pong') {
    return true;
  }
  return false;
}

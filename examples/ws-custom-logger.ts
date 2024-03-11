import { LogParams, WebsocketClient } from '../src';

/** Optional, implement a custom logger */
const customLogger = {
  silly: (...params: LogParams): void => {
    console.log('silly', ...params);
  },
  debug: (...params: LogParams): void => {
    console.log(params);
  },
  notice: (...params: LogParams): void => {
    console.log(params);
  },
  info: (...params: LogParams): void => {
    console.info(params);
  },
  warning: (...params: LogParams): void => {
    console.error(params);
  },
  error: (...params: LogParams): void => {
    console.error(params);
  },
};

async function start() {
  const client = new WebsocketClient(undefined, customLogger);

  client.on('open', (data) => {
    console.log('open: ', data?.wsKey);
  });

  // Data received
  client.on('update', (data) => {
    console.info('update: ', data);
  });

  // Something happened, attempting to reconenct
  client.on('reconnect', (data) => {
    console.log('reconnect: ', data);
  });

  // Reconnect successful
  client.on('reconnected', (data) => {
    console.log('reconnected: ', data);
  });

  // Connection closed. If unexpected, expect reconnect -> reconnected.
  client.on('close', (data) => {
    console.error('close: ', data);
  });

  // Reply to a request, e.g. "subscribe"/"unsubscribe"/"authenticate"
  client.on('response', (data) => {
    console.info('response: ', data);
  });

  client.on('exception', (data) => {
    console.error('exception: ', data);
  });

  client.on('authenticated', (data) => {
    console.error('authenticated: ', data);
  });

  try {
    client.subscribe('spot/ticker:BTC_USDT', 'spot');
    //
  } catch (e) {
    console.error(`Req error: `, e);
  }
}

start();

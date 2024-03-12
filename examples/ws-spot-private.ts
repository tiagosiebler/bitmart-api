import { DefaultLogger, LogParams, WebsocketClient } from '../src';

const account = {
  key: process.env.API_KEY || 'apiKeyHere',
  secret: process.env.API_SECRET || 'apiSecretHere',
  memo: process.env.API_MEMO || 'apiMemoHere',
};

DefaultLogger.silly = (...params: LogParams): void => {
  console.log('silly', ...params);
};

async function start() {
  const client = new WebsocketClient({
    apiKey: account.key,
    apiSecret: account.secret,
    apiMemo: account.memo,
  });

  client.on('open', (data) => {
    console.log('connected ', data?.wsKey);
  });

  // Data received
  client.on('update', (data) => {
    console.info('data received: ', JSON.stringify(data));
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
    // order progress
    client.subscribe('spot/user/order:BTC_USDT', 'spot');

    // balance updates
    // client.subscribe('spot/user/balance:BALANCE_UPDATE', 'spot');
  } catch (e) {
    console.error(`Req error: `, e);
  }
}

start();

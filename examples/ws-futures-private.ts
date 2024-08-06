import { DefaultLogger, LogParams, WebsocketClient } from '../src/index.js';

// import from npm, after installing via npm `npm install bitmart-api`
// import { DefaultLogger, LogParams, WebsocketClient } from 'bitmart-api';

const account = {
  key: process.env.API_KEY || 'apiKeyHere',
  secret: process.env.API_SECRET || 'apiSecretHere',
  memo: process.env.API_MEMO || 'apiMemoHere',
};

DefaultLogger.trace = (...params: LogParams): void => {
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
    // Assets Channel
    client.subscribe(
      ['futures/asset:USDT', 'futures/asset:BTC', 'futures/asset:ETH'],
      'futures',
    );

    // Position Channel
    // client.subscribe('futures/position', 'futures');

    // Order Channel
    // client.subscribe('futures/order', 'futures');
  } catch (e) {
    console.error(`Req error: `, e);
  }
}

start();

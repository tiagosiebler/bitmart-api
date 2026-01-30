import { WebsocketClient } from '../../src/index.js';
// import from npm, after installing via npm `npm install bitmart-api`
// import { WebsocketClient } from 'bitmart-api';

async function start() {
  const client = new WebsocketClient();

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

  try {
    // Ticker Channel
    // client.subscribe('futures/ticker', 'futures');

    // Depth Channel
    // client.subscribe('futures/depth20:BTCUSDT', 'futures');

    // Trade Channel
    // client.subscribe('futures/trade:BTCUSDT', 'futures');

    // KlineBin Channel
    // client.subscribe('futures/klineBin1m:BTCUSDT', 'futures');

    // Or have multiple topics in one array:
    client.subscribe(
      [
        'futures/klineBin1m:BTCUSDT',
        'futures/klineBin1m:ETHUSDT',
        'futures/klineBin1m:XRPUSDT',
        'futures/klineBin1m:BMXUSDT',
        'futures/klineBin1m:SOLUSDT',
      ],
      'futures',
    );
  } catch (e) {
    console.error('Req error: ', e);
  }
}

start();

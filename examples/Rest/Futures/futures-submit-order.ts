import { FuturesClientV2 } from '../../../src/index.js';
// // import from npm, after installing via npm `npm install bitmart-api`
// import { FuturesClientV2 } from 'bitmart-api';

const account = {
  key: process.env.API_KEY || 'apiKeyHere',
  secret: process.env.API_SECRET || 'apiSecretHere',
  memo: process.env.API_MEMO || 'apiMemoHere',
};

const client = new FuturesClientV2({
  apiKey: account.key,
  apiSecret: account.secret,
  apiMemo: account.memo,
});

async function SumbitFuturesOrder() {
  try {
    const order = await client.submitFuturesOrder({
      symbol: 'BTCUSDT',
      type: 'market',
      side: 1, // Order side - 1=buy_open_long  -2=buy_close_short  -3=sell_close_long  -4=sell_open_short
      size: 1,
      leverage: '1',
      open_type: 'cross',
    });

    console.log('Order: ', JSON.stringify(order, null, 2));
  } catch (e) {
    console.error('Req error: ', e);
  }
}

SumbitFuturesOrder();

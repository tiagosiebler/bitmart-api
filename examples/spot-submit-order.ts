import { RestClient } from '../src';
// import from npm, after installing via npm `npm install bitmart-api`
// import { RestClient } from 'bitmart-api';

const account = {
  key: process.env.API_KEY || 'apiKeyHere',
  secret: process.env.API_SECRET || 'apiSecretHere',
  memo: process.env.API_MEMO || 'apiMemoHere',
};

async function start() {
  const client = new RestClient({
    apiKey: account.key,
    apiSecret: account.secret,
    apiMemo: account.memo,
  });

  try {
    // const usdValue = 6;
    // const price = 52000;
    // const qty = usdValue / price;

    // const limitBuyOrder = {
    //   symbol: 'BTC_USDT',
    //   side: 'buy',
    //   type: 'limit',
    //   size: String(qty),
    //   price: String(price),
    // };

    // const res = await client.submitSpotOrder({
    //   symbol: 'BTC_USDT',
    //   side: 'buy',
    //   type: 'market',
    //   size: String(qty),
    // });

    const res = await client.submitSpotOrderV2({
      symbol: 'BTC_USDT',
      side: 'sell',
      type: 'market',
      size: String(0.00011),
    });
    console.log('res ', JSON.stringify(res, null, 2));
  } catch (e) {
    console.error(`Req error: `, e);
  }
}

start();

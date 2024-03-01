import { RestClient } from '../src';

const account = {
  key: process.env.API_KEY || 'apiKeyHere',
  secret: process.env.API_SECRET || 'apiSecretHere',
  memo: process.env.API_MEMO || 'apiMemoHere',
};

const client = new RestClient({
  apiKey: account.key,
  apiSecret: account.secret,
  apiMemo: account.memo,
});

async function SumbitFuturesOrder() {
  try {
    const order = await client.submitFuturesOrder({
      symbol: 'BTC_USDT',
      side: 1, // Order side - 1=buy_open_long  -2=buy_close_short  -3=sell_close_long  -4=sell_open_short
      leverage: '5',
      size: 0.001,
      open_type: 'cross',
    });

    console.log('Order: ', JSON.stringify(order, null, 2));
  } catch (e) {
    console.error(`Req error: `, e);
  }
}

SumbitFuturesOrder();

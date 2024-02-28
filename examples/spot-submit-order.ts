import { RestClient } from '../src';

const WriteAPI = {
  key: 'api key here',
  secret: 'api secret here',
  memo: 'api memo here',
};

const client = new RestClient({
  apiKey: WriteAPI.key,
  apiSecret: WriteAPI.secret,
  apiMemo: WriteAPI.memo,
});

async function SubmitSpotOrder() {
  try {
    const order = await client.submitSpotOrderV2({
      symbol: 'BTC_USDT',
      side: 'buy',
      size: '0.1',
      type: 'market',
    });

    console.log('Order: ', JSON.stringify(order, null, 2));
  } catch (e) {
    console.error(`Req error: `, e);
  }
}

SubmitSpotOrder();

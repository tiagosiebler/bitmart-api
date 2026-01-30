import { FuturesClientV2 } from '../../../src/index.js';
// // import from npm, after installing via npm `npm install bitmart-api`
// import { FuturesClientV2 } from 'bitmart-api';

const client = new FuturesClientV2();

async function getFuturesKlines() {
  try {
    const klines = await client.getFuturesKlines({
      symbol: 'BTCUSDT',
      start_time: 1709130476,
      end_time: 1709131476,
    });

    console.log('Tickers: ', JSON.stringify(klines, null, 2));
  } catch (e) {
    console.error('Req error: ', e);
  }
}

getFuturesKlines();

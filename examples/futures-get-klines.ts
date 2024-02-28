import { RestClient } from '../src';

const client = new RestClient();

async function getFuturesKlines() {
  try {
    const klines = await client.getFuturesKlines({
      symbol: 'BTCUSDT',
      start_time: 1709130476,
      end_time: 1709131476,
    });

    console.log('Tickers: ', JSON.stringify(klines, null, 2));
  } catch (e) {
    console.error(`Req error: `, e);
  }
}

getFuturesKlines();

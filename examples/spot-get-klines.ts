import { RestClient } from '../src';

const client = new RestClient();

async function getKlines() {
  try {
    const klines = await client.getSpotLatestKlineV3({ symbol: 'BTC_USDT' });

    console.log('Tickers: ', JSON.stringify(klines, null, 2));
  } catch (e) {
    console.error(`Req error: `, e);
  }
}

getKlines();

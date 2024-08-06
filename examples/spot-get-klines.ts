import { RestClient } from '../src';
// import from npm, after installing via npm `npm install bitmart-api`
// import { RestClient } from 'bitmart-api';

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

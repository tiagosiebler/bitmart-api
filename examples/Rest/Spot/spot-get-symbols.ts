import { RestClient } from '../../../src/index.js';
// import from npm, after installing via npm `npm install bitmart-api`
// import { RestClient } from 'bitmart-api';

const client = new RestClient();

async function getTickers() {
  try {
    const tickers = await client.getSpotTickersV3();

    console.log('Tickers: ', JSON.stringify(tickers, null, 2));
  } catch (e) {
    console.error('Req error: ', e);
  }
}

getTickers();

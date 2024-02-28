import { RestClient } from '../src';

const client = new RestClient();

async function getTickers() {
  try {
    const tickers = await client.getSpotTickersV3();

    console.log('Tickers: ', JSON.stringify(tickers, null, 2));
  } catch (e) {
    console.error(`Req error: `, e);
  }
}

getTickers();

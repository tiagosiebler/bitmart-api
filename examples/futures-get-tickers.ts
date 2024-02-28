import { RestClient } from '../src';

const client = new RestClient();

async function getFuturesTickers() {
  try {
    const tickers = await client.getFuturesContractDetails();

    console.log('Tickers: ', JSON.stringify(tickers, null, 2));
  } catch (e) {
    console.error(`Req error: `, e);
  }
}

getFuturesTickers();

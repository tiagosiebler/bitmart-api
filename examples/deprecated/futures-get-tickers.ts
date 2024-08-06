import { RestClient } from '../../src/index.js';

/**
 * Note: for futures, use the new FuturesClientV2 for all REST API calls.
 * These are mapped to the new V2 futures sub domain.
 */
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

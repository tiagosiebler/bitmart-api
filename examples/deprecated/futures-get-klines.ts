import { RestClient } from '../../src/index.js';

/**
 * Note: for futures, use the new FuturesClientV2 for all REST API calls.
 * These are mapped to the new V2 futures sub domain.
 */
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

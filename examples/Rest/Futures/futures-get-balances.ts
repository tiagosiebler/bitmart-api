import { FuturesClientV2 } from '../../../src/index.js';
// // import from npm, after installing via npm `npm install bitmart-api`
// import { FuturesClientV2 } from 'bitmart-api';

const account = {
  key: process.env.API_KEY || 'apiKeyHere',
  secret: process.env.API_SECRET || 'apiSecretHere',
  memo: process.env.API_MEMO || 'apiMemoHere',
};

const client = new FuturesClientV2({
  apiKey: account.key,
  apiSecret: account.secret,
  apiMemo: account.memo,
});

async function getFuturesAssets() {
  try {
    const balances = await client.getFuturesAccountAssets();

    console.log('Balances: ', JSON.stringify(balances, null, 2));
  } catch (e) {
    console.error('Req error: ', e);
  }
}

getFuturesAssets();

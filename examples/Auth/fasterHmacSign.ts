import { createHmac } from 'crypto';

import { RestClient } from '../../src/index.js';
// import from npm, after installing via npm `npm install bitmart-api`
// import { RestClient } from 'bitmart-api';

const account = {
  key: process.env.API_KEY || 'apiKeyHere',
  secret: process.env.API_SECRET || 'apiSecretHere',
  memo: process.env.API_MEMO || 'apiMemoHere',
};

const client = new RestClient({
  apiKey: account.key,
  apiSecret: account.secret,
  apiMemo: account.memo,
  /**
   * Overkill in almost every case, but if you need any optimisation available,
   * you can inject a faster sign mechanism such as node's native createHmac:
   */
  customSignMessageFn: async (message, secret) => {
    return createHmac('sha256', secret).update(message).digest('hex');
  },
});

async function getSpotBalances() {
  try {
    const balances = await client.getAccountBalancesV1();

    console.log('Balances: ', JSON.stringify(balances, null, 2));
  } catch (e) {
    console.error('Req error: ', e);
  }
}

getSpotBalances();

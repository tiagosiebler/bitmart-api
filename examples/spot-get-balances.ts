import { RestClient } from '../src';

const account = {
  key: process.env.API_KEY || 'apiKeyHere',
  secret: process.env.API_SECRET || 'apiSecretHere',
  memo: process.env.API_MEMO || 'apiMemoHere',
};

const client = new RestClient({
  apiKey: account.key,
  apiSecret: account.secret,
  apiMemo: account.memo,
});

async function getSpotBalances() {
  try {
    const balances = await client.getAccountBalancesV1();

    console.log('Balances: ', JSON.stringify(balances, null, 2));
  } catch (e) {
    console.error(`Req error: `, e);
  }
}

getSpotBalances();

import { RestClient } from '../src';

const WriteAPI = {
  key: 'api key here',
  secret: 'api secret here',
  memo: 'api memo here',
};

const client = new RestClient({
  apiKey: WriteAPI.key,
  apiSecret: WriteAPI.secret,
  apiMemo: WriteAPI.memo,
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

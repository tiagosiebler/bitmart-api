const { FuturesClientV2 } = require('bitmart-api');

  // This example shows how to call this bitmart API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "bitmart-api" for bitmart exchange
  // This bitmart API SDK is available on npm via "npm install bitmart-api"
  // ENDPOINT: contract/public/market-trade
  // METHOD: GET
  // PUBLIC: YES

const client = new FuturesClientV2({
  apiKey: 'yourAPIKeyHere',
  apiSecret: 'yourAPISecretHere',
  apiMemo: 'yourAPIMemoHere',
});

client.getFuturesMarketTrade(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

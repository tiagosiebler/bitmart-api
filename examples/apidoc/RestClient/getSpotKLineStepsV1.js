const { RestClient } = require('bitmart-api');

  // This example shows how to call this bitmart API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "bitmart-api" for bitmart exchange
  // This bitmart API SDK is available on npm via "npm install bitmart-api"
  // ENDPOINT: spot/v1/steps
  // METHOD: GET
  // PUBLIC: YES

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getSpotKLineStepsV1(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

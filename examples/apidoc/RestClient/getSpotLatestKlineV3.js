const { RestClient } = require('bitmart-api');

  // ENDPOINT: spot/quotation/v3/lite-klines
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L175

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getSpotLatestKlineV3(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

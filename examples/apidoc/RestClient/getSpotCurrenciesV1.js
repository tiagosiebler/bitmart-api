const { RestClient } = require('bitmart-api');

  // ENDPOINT: spot/v1/currencies
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L149

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getSpotCurrenciesV1(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

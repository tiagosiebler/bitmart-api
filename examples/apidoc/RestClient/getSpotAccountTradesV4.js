const { RestClient } = require('bitmart-api');

  // ENDPOINT: spot/v4/query/trades
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L423

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getSpotAccountTradesV4(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

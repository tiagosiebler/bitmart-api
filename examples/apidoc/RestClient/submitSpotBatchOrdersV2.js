const { RestClient } = require('bitmart-api');

  // ENDPOINT: spot/v2/batch_orders
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L345

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.submitSpotBatchOrdersV2(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

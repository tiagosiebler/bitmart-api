const { RestClient } = require('bitmart-api');

  // ENDPOINT: contract/private/current-plan-order
  // METHOD: GET
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L650

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getFuturesAccountPlanOrders(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

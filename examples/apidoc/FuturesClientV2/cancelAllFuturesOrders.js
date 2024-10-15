const { FuturesClientV2 } = require('bitmart-api');

  // ENDPOINT: contract/private/cancel-orders
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L216

const client = new FuturesClientV2({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.cancelAllFuturesOrders(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

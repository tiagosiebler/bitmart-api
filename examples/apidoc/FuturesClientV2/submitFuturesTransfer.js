const { FuturesClientV2 } = require('bitmart-api');

  // ENDPOINT: account/v1/transfer-contract
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L236

const client = new FuturesClientV2({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.submitFuturesTransfer(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

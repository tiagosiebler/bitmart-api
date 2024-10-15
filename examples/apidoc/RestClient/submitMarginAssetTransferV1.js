const { RestClient } = require('bitmart-api');

  // ENDPOINT: spot/v1/margin/isolated/transfer
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L308

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.submitMarginAssetTransferV1(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

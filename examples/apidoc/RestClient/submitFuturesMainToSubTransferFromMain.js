const { RestClient } = require('bitmart-api');

  // ENDPOINT: account/contract/sub-account/main/v1/main-to-sub
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L779

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.submitFuturesMainToSubTransferFromMain(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

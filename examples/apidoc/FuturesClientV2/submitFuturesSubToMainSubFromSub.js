const { FuturesClientV2 } = require('bitmart-api');

  // ENDPOINT: account/contract/sub-account/sub/v1/sub-to-main
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L310

const client = new FuturesClientV2({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.submitFuturesSubToMainSubFromSub(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
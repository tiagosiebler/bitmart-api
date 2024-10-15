const { RestClient } = require('bitmart-api');

  // ENDPOINT: account/v1/deposit/address
  // METHOD: GET
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L272

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getAccountDepositAddressV1(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

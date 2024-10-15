const { RestClient } = require('bitmart-api');

  // ENDPOINT: contract/public/open-interest
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L577

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getFuturesOpenInterest(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

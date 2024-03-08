# Node.js & Typescript Bitmart API SDK

[![Build & Test](https://github.com/tiagosiebler/bitmart-api/actions/workflows/e2etests.yml/badge.svg?branch=master)](https://github.com/tiagosiebler/bitmart-api/actions/workflows/e2etests.yml) [![npm version](https://img.shields.io/npm/v/bitmart-api)][1] [![npm size](https://img.shields.io/bundlephobia/min/bitmart-api/latest)][1] [![npm downloads](https://img.shields.io/npm/dt/bitmart-api)][1]
[![last commit](https://img.shields.io/github/last-commit/tiagosiebler/bitmart-api)][1]
[![CodeFactor](https://www.codefactor.io/repository/github/tiagosiebler/bitmart-api/badge)](https://www.codefactor.io/repository/github/tiagosiebler/bitmart-api) [![Telegram](https://img.shields.io/badge/chat-on%20telegram-blue.svg)](https://t.me/nodetraders)

[![connector logo](https://github.com/tiagosiebler/bitmart-api/blob/master/docs/images/logo1.png?raw=true)][1]

[1]: https://www.npmjs.com/package/bitmart-api

Complete JavaScript & Node.js SDK for Bitmart REST APIs & WebSockets:

- Complete integration with all Bitmart APIs.
- TypeScript support (with type declarations for most API requests & responses)
- Robust WebSocket integration with configurable connection heartbeats & automatic reconnect then resubscribe workflows.
- Browser-friendly HMAC signature mechanism.

## Installation

`npm install --save bitmart-api`

## Issues & Discussion

- Issues? Check the [issues tab](https://github.com/tiagosiebler/bitmart-api/issues).
- Discuss & collaborate with other node devs? Join our [Node.js Algo Traders](https://t.me/nodetraders) engineering community on telegram.

## Related projects

Check out my related projects:

- Try my connectors:
  - [binance](https://www.npmjs.com/package/binance)
  - [bybit-api](https://www.npmjs.com/package/bybit-api)
  - [okx-api](https://www.npmjs.com/package/okx-api)
  - [bitget-api](https://www.npmjs.com/package/bitget-api)
  - [bitmart-api](https://www.npmjs.com/package/bitmart-api)
- Try my misc utilities:
  - [orderbooks](https://www.npmjs.com/package/orderbooks)
  - [accountstate](https://www.npmjs.com/package/accountstate)
- Check out my examples:
  - [awesome-crypto-examples](https://github.com/tiagosiebler/awesome-crypto-examples)

## Structure

This connector is fully compatible with both TypeScript and pure JavaScript projects, while the connector is written in TypeScript. A pure JavaScript version can be built using `npm run build`, which is also the version published to [npm](https://www.npmjs.com/package/bitmart-api).

The version on npm is the output from the `build` command and can be used in projects without TypeScript (although TypeScript is definitely recommended).

Note: The build will output both ESM and CJS, although node should automatically import the correct entrypoint for your environment.

- [src](./src) - the whole SDK written in TypeScript
- [dist](./dist) - ESM & CJS builds of the SDK in JavaScript (this is published to npm)
- [examples](./examples) - some implementation examples & demonstrations.

## Usage

Most methods pass values as-is into HTTP requests. These can be populated using parameters specified by Bitmart's API documentation, or check the type definition in each class within this repository.

- [Bitmart API | Spot](https://developer-pro.bitmart.com/en/spot/#change-log)
- [Bitmart API | USD-M Futures](https://developer-pro.bitmart.com/en/spot/#change-log)

### REST APIs

- Create API credentials within your account on Bitmart's website, if you haven't done so already.
- Import/require the module
- Create an instance of the REST client
- Call the function corresponding to the API call and handle the returned promise.

```typescript
const { RestClient } = require('bitmart-api');

const client = new RestClient({
  apiKey: "yourAPIKeyHere",
  apiSecret: "yourAPISecretHere",
  apiMemo: "yourAPIMemoHere
});

client.getAccountBalancesV1()
.then((result) => {
  console.log('getAccountBalancesV1 result: ', result);
})
.catch((err) => {
  console.error('getAccountBalancesV1 error: ', err);
});
```

### Recv Window

This can be set two levels:

- Per method: if provided in a method, will be used instead of the global default
- Global default: this will apply by default to any api call that supports recvWindow, if no recvWindow is provided in the method call.

### Custom Sign

Authentication involves HMAC signing on the request, using API credentials. Internally, this SDK uses the Web Crypto API. The REST client also supports injecting a custom sign function, should you wish to use an alternative (such as node's native & faster createHmac).

Refer to the [fasterHmacSign.ts](./examples/fasterHmacSign.ts) example for a demonstration.

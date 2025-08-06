# Node.js & JavaScript SDK for BitMart REST API & WebSockets

[![npm version](https://img.shields.io/npm/v/bitmart-api)][1]
[![npm size](https://img.shields.io/bundlephobia/min/bitmart-api/latest)][1]
[![npm downloads](https://img.shields.io/npm/dt/bitmart-api)][1]
[![Build & Test](https://github.com/tiagosiebler/bitmart-api/actions/workflows/e2etest.yml/badge.svg?branch=master)](https://github.com/tiagosiebler/bitmart-api/actions/workflows/e2etest.yml)
[![last commit](https://img.shields.io/github/last-commit/tiagosiebler/bitmart-api)][1]
[![CodeFactor](https://www.codefactor.io/repository/github/tiagosiebler/bitmart-api/badge)](https://www.codefactor.io/repository/github/tiagosiebler/bitmart-api)
[![Telegram](https://img.shields.io/badge/chat-on%20telegram-blue.svg)](https://t.me/nodetraders)

<p align="center">
  <a href="https://www.npmjs.com/package/bitmart-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/tiagosiebler/bitmart-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/tiagosiebler/bitmart-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

[1]: https://www.npmjs.com/package/bitmart-api

Complete JavaScript & Node.js SDK for BitMart REST APIs & WebSockets:

- Professional, robust & performant BitMart SDK with extensive production use in live trading environments.
- Complete integration with all BitMart APIs and domains.
  - Spot trading APIs via RestClient
  - Full support for Futures V2 domain via FuturesClientV2
  - Unified WebSocket client for all markets
- Complete TypeScript support (with type declarations for most API requests & responses).
  - Strongly typed requests and responses.
  - Automated end-to-end tests ensuring reliability.
- Actively maintained with a modern, promise-driven interface.
- Robust WebSocket integration with configurable connection heartbeats & automatic reconnect then resubscribe workflows.
  - Event driven messaging.
  - Smart WebSocket persistence with automatic reconnection handling.
  - Emit `reconnected` event when dropped connection is restored.
  - Support for both public and private WebSocket streams.
- Browser-friendly HMAC signature mechanism with Web Crypto API support.
- Automatically supports both ESM and CJS projects.
- Custom HMAC signing support for enhanced performance.
- Heavy automated end-to-end testing with real API calls.
- Active community support & collaboration in telegram: [Node.js Algo Traders](https://t.me/nodetraders).

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
- [Issues & Discussion](#issues--discussion)
- [Usage](#usage)
  - [REST API Clients](#rest-apis)
    - [Spot & Margin APIs](#spot--margin-apis)
    - [Futures V2 APIs](#futures-v2-apis)
  - [WebSocket Client](#websocket)
    - [Public Streams](#public-websocket-streams)
    - [Private Streams](#private-websocket-streams)
  - [Configuration Options](#configuration-options)
    - [Recv Window](#recv-window)
    - [Custom Sign](#custom-sign)
- [Related Projects](#related-projects)
- [Structure](#structure)
- [LLMs & AI](#use-with-llms--ai)
- [Used By](#used-by)
- [Contributions & Thanks](#contributions--thanks)

## Installation

`npm install --save bitmart-api`

## Examples

Refer to the [examples](./examples) folder for implementation demos, including:

- **REST API Examples**: spot trading, futures trading, account management
- **WebSocket Examples**: public data streams, private account streams, custom logging
- **Advanced Features**: custom HMAC signing, error handling

## Issues & Discussion

- Issues? Check the [issues tab](https://github.com/tiagosiebler/bitmart-api/issues).
- Discuss & collaborate with other node devs? Join our [Node.js Algo Traders](https://t.me/nodetraders) engineering community on telegram.
- Follow our announcement channel for real-time updates on [X/Twitter](https://x.com/sieblyio)

## Usage

Create API credentials on BitMart's website if you plan to use private endpoints or place trades.

Most methods accept JS objects. These can be populated using parameters specified by BitMart's API documentation, or check the type definition in each class within this repository.

### Documentation Links

- [BitMart API | Spot](https://developer-pro.bitmart.com/en/spot/#change-log)
- [BitMart API | USD-M Futures](https://developer-pro.bitmart.com/en/spot/#change-log)
- [REST Endpoint Function List](./docs/endpointFunctionList.md)

## REST APIs

There are two main REST API clients depending on the market you're trading:

1. `RestClient` - for spot trading, margin, and general account operations
2. `FuturesClientV2` - dedicated client for USD-M futures trading (uses V2 domain)

### Spot & Margin APIs

Use the `RestClient` for spot trading, margin trading, and general account operations.

```typescript
import { RestClient } from 'bitmart-api';
// or if you prefer require:
// const { RestClient } = require('bitmart-api');

const API_KEY = 'yourAPIKeyHere';
const API_SECRET = 'yourAPISecretHere';
const API_MEMO = 'yourAPIMemoHere';

const client = new RestClient({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  apiMemo: API_MEMO,
});

// For public endpoints, API credentials are optional
// const client = new RestClient();

// Get account balances
client
  .getAccountBalancesV1()
  .then((result) => {
    console.log('Account balances: ', result);
  })
  .catch((err) => {
    console.error('Error: ', err);
  });

// Submit a spot order
client
  .submitSpotOrderV2({
    symbol: 'BTC_USDT',
    side: 'buy',
    type: 'limit',
    size: '0.001',
    price: '30000',
  })
  .then((result) => {
    console.log('Order submitted: ', result);
  })
  .catch((err) => {
    console.error('Order error: ', err);
  });

// Get spot candlestick data
client
  .getSpotKlinesV3({
    symbol: 'BTC_USDT',
    step: 60, // 1 minute
    from: Math.floor(Date.now() / 1000) - 3600, // 1 hour ago
    to: Math.floor(Date.now() / 1000),
  })
  .then((result) => {
    console.log('Klines: ', result);
  })
  .catch((err) => {
    console.error('Klines error: ', err);
  });
```

### Futures V2 APIs

Use the `FuturesClientV2` for USD-M futures trading. This client connects to BitMart's V2 futures domain.

```typescript
import { FuturesClientV2 } from 'bitmart-api';
// or if you prefer require:
// const { FuturesClientV2 } = require('bitmart-api');

const futuresClient = new FuturesClientV2({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  apiMemo: API_MEMO,
});

// Get futures account assets
try {
  const balances = await futuresClient.getFuturesAccountAssets();
  console.log('Futures balances: ', JSON.stringify(balances, null, 2));
} catch (error) {
  console.error('Error getting balances: ', error);
}

// Submit a futures order
futuresClient
  .submitFuturesOrder({
    symbol: 'BTCUSDT',
    side: 'buy',
    type: 'limit',
    size: '0.001',
    price: '30000',
    leverage: '10',
  })
  .then((result) => {
    console.log('Futures order submitted: ', result);
  })
  .catch((err) => {
    console.error('Futures order error: ', err);
  });
```

## WebSocket

All WebSocket functionality is supported via the unified `WebsocketClient`. This client handles both spot and futures WebSocket streams, with automatic connection management and reconnection.

Key WebSocket features:

- Event driven messaging
- Smart WebSocket persistence with automatic reconnection
- Heartbeat mechanisms to detect disconnections
- Automatic resubscription after reconnection
- Support for both public and private data streams
- Unified client for spot and futures markets

### Public WebSocket Streams

For public data streams, API credentials are not required:

```typescript
import { WebsocketClient } from 'bitmart-api';
// or if you prefer require:
// const { WebsocketClient } = require('bitmart-api');

// Create WebSocket client for public streams
const wsClient = new WebsocketClient();

// Set up event handlers
wsClient.on('open', (data) => {
  console.log('WebSocket connected: ', data?.wsKey);
});

wsClient.on('update', (data) => {
  console.log('Data received: ', JSON.stringify(data, null, 2));
});

wsClient.on('reconnected', (data) => {
  console.log('WebSocket reconnected: ', data);
});

wsClient.on('exception', (data) => {
  console.error('WebSocket error: ', data);
});

// Subscribe to public data streams

// Spot market ticker
wsClient.subscribe('spot/ticker:BTC_USDT', 'spot');

// Spot market depth
wsClient.subscribe('spot/depth20:BTC_USDT', 'spot');

// Futures market ticker
wsClient.subscribe('futures/ticker', 'futures');

// Futures market depth
wsClient.subscribe('futures/depth20:BTCUSDT', 'futures');

// Futures trades
wsClient.subscribe('futures/trade:BTCUSDT', 'futures');

// Multiple futures kline subscriptions
wsClient.subscribe(
  [
    'futures/klineBin1m:BTCUSDT',
    'futures/klineBin1m:ETHUSDT',
    'futures/klineBin5m:BTCUSDT',
    'futures/klineBin1h:ETHUSDT',
  ],
  'futures',
);
```

### Private WebSocket Streams

For private account data streams, API credentials are required:

```typescript
import { WebsocketClient } from 'bitmart-api';

// Create WebSocket client with API credentials for private streams
const wsClient = new WebsocketClient({
  apiKey: 'yourAPIKeyHere',
  apiSecret: 'yourAPISecretHere',
  apiMemo: 'yourAPIMemoHere',
});

// Set up event handlers
wsClient.on('open', (data) => {
  console.log('Private WebSocket connected: ', data?.wsKey);
});

wsClient.on('update', (data) => {
  console.log('Private data received: ', JSON.stringify(data, null, 2));
});

wsClient.on('authenticated', (data) => {
  console.log('WebSocket authenticated: ', data);
});

wsClient.on('response', (data) => {
  console.log('WebSocket response: ', data);
});

wsClient.on('exception', (data) => {
  console.error('WebSocket error: ', data);
});

// Subscribe to private data streams

// Spot account orders
wsClient.subscribe('spot/user/order:BTC_USDT', 'spot');

// Spot account balance updates
wsClient.subscribe('spot/user/balance:USDT', 'spot');

// Futures account orders
wsClient.subscribe('futures/user/order:BTCUSDT', 'futures');

// Futures account positions
wsClient.subscribe('futures/user/position:BTCUSDT', 'futures');
```

For more comprehensive examples, including custom logging and error handling, check the [examples](./examples) folder.

## Configuration Options

### Recv Window

The receive window parameter determines how long an API request is valid. This can be configured at two levels:

- **Per method**: If provided in a method call, will be used instead of the global default
- **Global default**: Applied by default to any API call that supports recvWindow, if no recvWindow is provided in the method call

```typescript
// Set global receive window during client initialization
const client = new RestClient({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  apiMemo: API_MEMO,
  recvWindow: 10000, // 10 seconds global default
});

// Override receive window for specific method calls
client.getAccountBalancesV1({ recvWindow: 5000 }); // 5 seconds for this call
```

### Custom Sign

Authentication involves HMAC signing on requests using API credentials. Internally, this SDK uses the Web Crypto API for browser compatibility. The REST client also supports injecting a custom sign function if you wish to use an alternative (such as Node.js's native & faster `createHmac`).

Refer to the [fasterHmacSign.ts](./examples/fasterHmacSign.ts) example for a complete demonstration.

## Use with LLMs & AI

This SDK includes a bundled `llms.txt` file in the root of the repository. If you're developing with LLMs, use the included `llms.txt` with your LLM - it will significantly improve the LLMs understanding of how to correctly use this SDK.

This file contains AI optimised structure of all the functions in this package, and their parameters for easier use with any learning models or artificial intelligence.

---

## Used By

[![Repository Users Preview Image](https://dependents.info/tiagosiebler/bitmart-api/image)](https://github.com/tiagosiebler/bitmart-api/network/dependents)

---

<!-- template_related_projects -->

## Related projects

Check out my related JavaScript/TypeScript/Node.js projects:

- Try my REST API & WebSocket SDKs:
  - [Bybit-api Node.js SDK](https://www.npmjs.com/package/bybit-api)
  - [Okx-api Node.js SDK](https://www.npmjs.com/package/okx-api)
  - [Binance Node.js SDK](https://www.npmjs.com/package/binance)
  - [Gateio-api Node.js SDK](https://www.npmjs.com/package/gateio-api)
  - [Bitget-api Node.js SDK](https://www.npmjs.com/package/bitget-api)
  - [Kucoin-api Node.js SDK](https://www.npmjs.com/package/kucoin-api)
  - [Coinbase-api Node.js SDK](https://www.npmjs.com/package/coinbase-api)
  - [Bitmart-api Node.js SDK](https://www.npmjs.com/package/bitmart-api)
- Try my misc utilities:
  - [OrderBooks Node.js](https://www.npmjs.com/package/orderbooks)
  - [Crypto Exchange Account State Cache](https://www.npmjs.com/package/accountstate)
- Check out my examples:
  - [awesome-crypto-examples Node.js](https://github.com/tiagosiebler/awesome-crypto-examples)
  <!-- template_related_projects_end -->

## Structure

This connector is fully compatible with both TypeScript and pure JavaScript projects, while the connector is written in TypeScript. A pure JavaScript version can be built using `npm run build`, which is also the version published to [npm](https://www.npmjs.com/package/bitmart-api).

The version on npm is the output from the `build` command and can be used in projects without TypeScript (although TypeScript is definitely recommended).

Note: The build will output both ESM and CJS, although node should automatically import the correct entrypoint for your environment.

- [src](./src) - the whole SDK written in TypeScript
- [dist](./dist) - ESM & CJS builds of the SDK in JavaScript (this is published to npm)
- [examples](./examples) - some implementation examples & demonstrations.

---

<!-- template_contributions -->

### Contributions & Thanks

Have my projects helped you? Share the love, there are many ways you can show your thanks:

- Star & share my projects.
- Are my projects useful? Sponsor me on Github and support my effort to maintain & improve them: https://github.com/sponsors/tiagosiebler
- Have an interesting project? Get in touch & invite me to it.
- Or buy me all the coffee:
  - ETH(ERC20): `0xA3Bda8BecaB4DCdA539Dc16F9C54a592553Be06C` <!-- metamask -->

<!---
old ones:
  - BTC: `1C6GWZL1XW3jrjpPTS863XtZiXL1aTK7Jk`
  - BTC(SegWit): `bc1ql64wr9z3khp2gy7dqlmqw7cp6h0lcusz0zjtls`
  - ETH(ERC20): `0xe0bbbc805e0e83341fadc210d6202f4022e50992`
  - USDT(TRC20): `TA18VUywcNEM9ahh3TTWF3sFpt9rkLnnQa
-->
<!-- template_contributions_end -->

### Contributions & Pull Requests

Contributions are encouraged, I will review any incoming pull requests. See the issues tab for todo items.

<!-- template_star_history -->

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tiagosiebler/bybit-api,tiagosiebler/okx-api,tiagosiebler/binance,tiagosiebler/bitget-api,tiagosiebler/bitmart-api,tiagosiebler/gateio-api,tiagosiebler/kucoin-api,tiagosiebler/coinbase-api,tiagosiebler/orderbooks,tiagosiebler/accountstate,tiagosiebler/awesome-crypto-examples&type=Date)](https://star-history.com/#tiagosiebler/bybit-api&tiagosiebler/okx-api&tiagosiebler/binance&tiagosiebler/bitget-api&tiagosiebler/bitmart-api&tiagosiebler/gateio-api&tiagosiebler/kucoin-api&tiagosiebler/coinbase-api&tiagosiebler/orderbooks&tiagosiebler/accountstate&tiagosiebler/awesome-crypto-examples&Date)

<!-- template_star_history_end -->

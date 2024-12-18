
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/bitmart-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/tiagosiebler/bitmart-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/tiagosiebler/bitmart-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/tiagosiebler/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [RestClient](#RestClientts)
- [FuturesClientV2](#FuturesClientV2ts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# RestClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [RestClient.ts](/src/RestClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getSystemTime()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L198) |  | GET | `system/time` |
| [getSystemStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L202) |  | GET | `system/service` |
| [getSpotCurrenciesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L212) |  | GET | `spot/v1/currencies` |
| [getSpotTradingPairsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L218) |  | GET | `spot/v1/symbols` |
| [getSpotTradingPairDetailsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L222) |  | GET | `spot/v1/symbols/details` |
| [getSpotTickersV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L228) |  | GET | `spot/quotation/v3/tickers` |
| [getSpotTickerV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L232) |  | GET | `spot/quotation/v3/ticker` |
| [getSpotLatestKlineV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L238) |  | GET | `spot/quotation/v3/lite-klines` |
| [getSpotHistoryKlineV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L244) |  | GET | `spot/quotation/v3/klines` |
| [getSpotOrderBookDepthV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L250) |  | GET | `spot/quotation/v3/books` |
| [getSpotRecentTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L257) |  | GET | `spot/quotation/v3/trades` |
| [getSpotTickersV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L273) |  | GET | `spot/v2/ticker` |
| [getSpotTickerV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L280) |  | GET | `spot/v1/ticker_detail` |
| [getSpotKLineStepsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L289) |  | GET | `spot/v1/steps` |
| [getSpotKlinesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L296) |  | GET | `spot/v1/symbols/kline` |
| [getSpotOrderBookDepthV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L305) |  | GET | `spot/v1/symbols/book` |
| [getAccountBalancesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L317) | :closed_lock_with_key:  | GET | `account/v1/wallet` |
| [getAccountCurrenciesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L323) |  | GET | `account/v1/currencies` |
| [getSpotWalletBalanceV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L329) | :closed_lock_with_key:  | GET | `spot/v1/wallet` |
| [getAccountDepositAddressV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L335) | :closed_lock_with_key:  | GET | `account/v1/deposit/address` |
| [getAccountWithdrawQuotaV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L341) | :closed_lock_with_key:  | GET | `account/v1/withdraw/charge` |
| [submitWithdrawalV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L347) | :closed_lock_with_key:  | POST | `account/v1/withdraw/apply` |
| [getDepositWithdrawHistoryV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L353) | :closed_lock_with_key:  | GET | `account/v2/deposit-withdraw/history` |
| [getDepositWithdrawDetailV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L359) | :closed_lock_with_key:  | GET | `account/v1/deposit-withdraw/detail` |
| [getMarginAccountDetailsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L365) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/account` |
| [submitMarginAssetTransferV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L371) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/transfer` |
| [getBasicSpotFeeRateV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L377) | :closed_lock_with_key:  | GET | `spot/v1/user_fee` |
| [getActualSpotTradeFeeRateV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L381) | :closed_lock_with_key:  | GET | `spot/v1/trade_fee` |
| [submitSpotOrderV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L393) | :closed_lock_with_key:  | POST | `spot/v2/submit_order` |
| [submitMarginOrderV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L399) | :closed_lock_with_key:  | POST | `spot/v1/margin/submit_order` |
| [submitSpotBatchOrdersV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L408) | :closed_lock_with_key:  | POST | `spot/v2/batch_orders` |
| [cancelSpotOrderV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L414) | :closed_lock_with_key:  | POST | `spot/v3/cancel_order` |
| [submitSpotBatchOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L420) | :closed_lock_with_key:  | POST | `spot/v4/batch_orders` |
| [cancelSpotBatchOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L431) | :closed_lock_with_key:  | POST | `spot/v4/cancel_orders` |
| [cancelAllSpotOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L437) | :closed_lock_with_key:  | POST | `spot/v4/cancel_all` |
| [cancelSpotOrdersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L446) | :closed_lock_with_key:  | POST | `spot/v1/cancel_orders` |
| [getSpotOrderByIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L456) | :closed_lock_with_key:  | POST | `spot/v4/query/order` |
| [getSpotOrderByClientOrderIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L465) | :closed_lock_with_key:  | POST | `spot/v4/query/client-order` |
| [getSpotOpenOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L471) | :closed_lock_with_key:  | POST | `spot/v4/query/open-orders` |
| [getSpotHistoricOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L477) | :closed_lock_with_key:  | POST | `spot/v4/query/history-orders` |
| [getSpotAccountTradesV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L486) | :closed_lock_with_key:  | POST | `spot/v4/query/trades` |
| [getSpotAccountOrderTradesV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L495) | :closed_lock_with_key:  | POST | `spot/v4/query/order-trades` |
| [marginBorrowV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L508) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/borrow` |
| [marginRepayV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L514) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/repay` |
| [getMarginBorrowRecordV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L520) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/borrow_record` |
| [getMarginRepayRecordV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L526) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/repay_record` |
| [getMarginBorrowingRatesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L535) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/pairs` |
| [submitMainTransferSubToMainV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L550) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/sub-to-main` |
| [submitSubTransferSubToMainV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L559) | :closed_lock_with_key:  | POST | `account/sub-account/sub/v1/sub-to-main` |
| [submitMainTransferMainToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L565) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/main-to-sub` |
| [submitMainTransferSubToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L571) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/sub-to-sub` |
| [submitSubTransferSubToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L577) | :closed_lock_with_key:  | POST | `account/sub-account/sub/v1/sub-to-sub` |
| [getSubTransfersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L583) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/transfer-list` |
| [getAccountSubTransfersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L589) | :closed_lock_with_key:  | GET | `account/sub-account/v1/transfer-history` |
| [getSubSpotWalletBalancesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L595) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/wallet` |
| [getSubAccountsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L601) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/subaccount-list` |
| [getFuturesContractDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L622) |  | GET | `contract/public/details` |
| [getFuturesContractDepth()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L631) |  | GET | `contract/public/depth` |
| [getFuturesOpenInterest()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L640) |  | GET | `contract/public/open-interest` |
| [getFuturesFundingRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L649) |  | GET | `contract/public/funding-rate` |
| [getFuturesKlines()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L658) |  | GET | `contract/public/kline` |
| [getFuturesAccountAssets()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L673) | :closed_lock_with_key:  | GET | `contract/private/assets-detail` |
| [getFuturesAccountOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L686) | :closed_lock_with_key:  | GET | `contract/private/order` |
| [getFuturesAccountOrderHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L695) | :closed_lock_with_key:  | GET | `contract/private/order-history` |
| [getFuturesAccountOpenOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L704) | :closed_lock_with_key:  | GET | `contract/private/get-open-orders` |
| [getFuturesAccountPlanOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L713) | :closed_lock_with_key:  | GET | `contract/private/current-plan-order` |
| [getFuturesAccountPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L722) | :closed_lock_with_key:  | GET | `contract/private/position` |
| [getPositionRiskDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L731) | :closed_lock_with_key:  | GET | `contract/private/position-risk` |
| [getFuturesAccountTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L740) | :closed_lock_with_key:  | GET | `contract/private/trades` |
| [getFuturesTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L749) | :closed_lock_with_key:  | GET | `account/v1/transfer-contract-list` |
| [submitFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L760) | :closed_lock_with_key:  | POST | `contract/private/submit-order` |
| [cancelFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L768) | :closed_lock_with_key:  | POST | `contract/private/cancel-order` |
| [cancelAllFuturesOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L777) | :closed_lock_with_key:  | POST | `contract/private/cancel-orders` |
| [submitFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L786) | :closed_lock_with_key:  | POST | `contract/private/submit-plan-order` |
| [cancelFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L797) | :closed_lock_with_key:  | POST | `contract/private/cancel-plan-order` |
| [submitFuturesTransfer()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L806) | :closed_lock_with_key:  | POST | `account/v1/transfer-contract` |
| [setFuturesLeverage()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L815) | :closed_lock_with_key:  | POST | `contract/private/submit-leverage` |
| [submitFuturesSubToMainTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L830) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/sub-to-main` |
| [submitFuturesMainToSubTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L842) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/main-to-sub` |
| [submitFuturesSubToMainSubFromSub()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L854) | :closed_lock_with_key:  | POST | `account/contract/sub-account/sub/v1/sub-to-main` |
| [getFuturesSubWallet()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L866) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/wallet` |
| [getFuturesSubTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L880) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/transfer-list` |
| [getFuturesSubTransferHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L892) | :closed_lock_with_key:  | GET | `account/contract/sub-account/v1/transfer-history` |
| [getFuturesAffiliateRebates()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L910) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-list` |
| [getFuturesAffiliateTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L919) | :closed_lock_with_key:  | GET | `contract/private/affiliate/trade-list` |
| [getBrokerRebate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L931) | :closed_lock_with_key:  | GET | `spot/v1/broker/rebate` |

# FuturesClientV2.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [FuturesClientV2.ts](/src/FuturesClientV2.ts). 

| Function                                                                                                                        | AUTH | HTTP Method | Endpoint |
|---------------------------------------------------------------------------------------------------------------------------------| :------: | :------: | -------- |
| [getSystemTime()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L80)                           |  | GET | `system/time` |
| [getSystemStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L84)                         |  | GET | `system/service` |
| [getFuturesContractDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L105)              |  | GET | `contract/public/details` |
| [getFuturesContractDepth()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L111)                |  | GET | `contract/public/depth` |
| [getFuturesOpenInterest()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L117)                 |  | GET | `contract/public/open-interest` |
| [getFuturesFundingRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L123)                  |  | GET | `contract/public/funding-rate` |
| [getFuturesKlines()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L129)                       |  | GET | `contract/public/kline` |
| [getFuturesAccountAssets()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L141)                | :closed_lock_with_key:  | GET | `contract/private/assets-detail` |
| [getFuturesTradeFeeRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L151)                 | :closed_lock_with_key:  | GET | `contract/private/trade-fee-rate` |
| [getFuturesAccountOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L161)                 | :closed_lock_with_key:  | GET | `contract/private/order` |
| [getFuturesAccountOrderHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L167)          | :closed_lock_with_key:  | GET | `contract/private/order-history` |
| [getFuturesAccountOpenOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L173)            | :closed_lock_with_key:  | GET | `contract/private/get-open-orders` |
| [getFuturesAccountPlanOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L179)            | :closed_lock_with_key:  | GET | `contract/private/current-plan-order` |
| [getFuturesAccountPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L185)             | :closed_lock_with_key:  | GET | `contract/private/position` |
| [getPositionRiskDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L194)                 | :closed_lock_with_key:  | GET | `contract/private/position-risk` |
| [getFuturesAccountTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L200)                | :closed_lock_with_key:  | GET | `contract/private/trades` |
| [getFuturesTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L206)                    | :closed_lock_with_key:  | GET | `account/v1/transfer-contract-list` |
| [submitFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L214)                     | :closed_lock_with_key:  | POST | `contract/private/submit-order` |
| [cancelFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L220)                     | :closed_lock_with_key:  | POST | `contract/private/cancel-order` |
| [cancelAllFuturesOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L226)                 | :closed_lock_with_key:  | POST | `contract/private/cancel-orders` |
| [submitFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L232)                 | :closed_lock_with_key:  | POST | `contract/private/submit-plan-order` |
| [cancelFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L240)                 | :closed_lock_with_key:  | POST | `contract/private/cancel-plan-order` |
| [submitFuturesTransfer()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L246)                  | :closed_lock_with_key:  | POST | `account/v1/transfer-contract` |
| [setFuturesLeverage()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L252)                     | :closed_lock_with_key:  | POST | `contract/private/submit-leverage` |
| [submitFuturesTPSLOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L258)                 | :closed_lock_with_key:  | POST | `contract/private/submit-tp-sl-order` |
| [updateFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L267)                 | :closed_lock_with_key:  | POST | `contract/private/modify-plan-order` |
| [updateFuturesPresetPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L275)           | :closed_lock_with_key:  | POST | `contract/private/modify-preset-plan-order` |
| [updateFuturesTPSLOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L288)                 | :closed_lock_with_key:  | POST | `contract/private/modify-tp-sl-order` |
| [submitFuturesTrailOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L297)                | :closed_lock_with_key:  | POST | `contract/private/submit-trail-order` |
| [cancelFuturesTrailOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L305)                | :closed_lock_with_key:  | POST | `contract/private/cancel-trail-order` |
| [submitFuturesSubToMainTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L302) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/sub-to-main` |
| [submitFuturesMainToSubTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L311) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/main-to-sub` |
| [submitFuturesSubToMainSubFromSub()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L320)       | :closed_lock_with_key:  | POST | `account/contract/sub-account/sub/v1/sub-to-main` |
| [getFuturesSubWallet()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L329)                    | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/wallet` |
| [getFuturesSubTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L340)                 | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/transfer-list` |
| [getFuturesSubTransferHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L349)           | :closed_lock_with_key:  | GET | `account/contract/sub-account/v1/transfer-history` |
| [getFuturesAffiliateRebates()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L364)             | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-list` |
| [getFuturesAffiliateTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L370)              | :closed_lock_with_key:  | GET | `contract/private/affiliate/trade-list` |
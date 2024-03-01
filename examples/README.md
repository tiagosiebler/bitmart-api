# Bitmart API Examples Node.js

Some examples written in Node.js/typescript showing how to use some of Bitmart's common API functionality, such as fetching prices, submitting orders, etc.

## Usage

Most of these examples can just be executed (e.g. using `ts-node` or `tsx`).

Any "private" examples that perform actions on an account (such as checking balance or submitting orders) will require an api key, secret and memo (provided by bitmart when you create an API key).

These can either be hardcoded or you can pass them as env vars to test the functionality.

For example on macOS or unix, using `ts-node` to execute a typescript file directly:

```bash
API_KEY="apiKeyHere" API_SECRET="secretHere" API_MEMO="memoHere" ts-node examples/futures-get-balances.ts
```

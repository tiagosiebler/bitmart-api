# bitmart-api

## Configuration

### Recv Window

This can be set two levels:

- Per method: if provided in a method, will be used instead of the global default
- Global default: this will apply by default to any api call that supports recvWindow, if no recvWindow is provided in the method call.

### Custom Sign

Authentication involves HMAC signing on the request, using API credentials. Internally, this SDK uses the Web Crypto API. The REST client also supports injecting a custom sign function, should you wish to use an alternative (such as node's native & faster createHmac).

Refer to the [fasterHmacSign.ts](./examples/fasterHmacSign.ts) example for a demonstration.

import { isDeepObjectMatch } from '../../src/lib/websocket/WsStore';

describe('WsStore', () => {
  describe('isDeepObjectMatch()', () => {
    it('should match two equal strings', () => {
      expect(
        isDeepObjectMatch('spot/ticker:BTC_USDT', 'spot/ticker:BTC_USDT'),
      ).toBeTruthy();
      expect(
        isDeepObjectMatch('spot/ticker:BTC_USDT', 'spot/ticker:ETH_USDT'),
      ).toBeFalsy();
    });

    it('should match simple topic strings', () => {
      const topic1 = 'spot/ticker:BTC_USDT';
      const topic2 = 'spot/ticker:BTC_USDT';

      expect(isDeepObjectMatch(topic1, topic2)).toBeTruthy();
    });

    it('should match topic objects if used', () => {
      const topic1 = {
        topic: 'spot/ticker:BTC_USDT',
      };
      const topic2 = {
        topic: 'spot/ticker:BTC_USDT',
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeTruthy();
    });

    it('should match topic objects with payload, even if keys are differently ordered', () => {
      const topic1 = {
        topic: 'futures/depth20:BTCUSDT',
        payload: { symbol: 'BTCUSDT' },
      };
      const topic2 = {
        payload: { symbol: 'BTCUSDT' },
        topic: 'futures/depth20:BTCUSDT',
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeTruthy();
    });

    it('should match nested payload objects', () => {
      const topic1 = {
        topic: 'futures/klineBin1m:BTCUSDT',
        payload: {
          symbol: 'BTCUSDT',
          interval: '1m',
        },
      };
      const topic2 = {
        topic: 'futures/klineBin1m:BTCUSDT',
        payload: {
          symbol: 'BTCUSDT',
          interval: '1m',
        },
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeTruthy();
    });

    it('should NOT match topics with different payload values', () => {
      const topic1 = {
        topic: 'spot/ticker:BTC_USDT',
        payload: { symbol: 'BTC_USDT' },
      };
      const topic2 = {
        topic: 'spot/ticker:BTC_USDT',
        payload: { symbol: 'ETH_USDT' },
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeFalsy();
    });

    it('should NOT match topics with nested payload differences', () => {
      const topic1 = {
        topic: 'futures/klineBin1m:BTCUSDT',
        payload: {
          symbol: 'BTCUSDT',
          interval: '1m',
        },
      };
      const topic2 = {
        topic: 'futures/klineBin1m:BTCUSDT',
        payload: {
          symbol: 'BTCUSDT',
          interval: '5m',
        },
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeFalsy();
    });

    it('should NOT match asymmetric objects (missing payload property)', () => {
      const topic1 = {
        topic: 'spot/ticker:BTC_USDT',
        payload: { symbol: 'BTC_USDT' },
      };
      const topic2 = {
        topic: 'spot/ticker:BTC_USDT',
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeFalsy();
    });

    it('should NOT match asymmetric objects (missing nested property)', () => {
      const topic1 = {
        topic: 'futures/klineBin1m:BTCUSDT',
        payload: {
          symbol: 'BTCUSDT',
          interval: '1m',
        },
      };
      const topic2 = {
        topic: 'futures/klineBin1m:BTCUSDT',
        payload: {
          symbol: 'BTCUSDT',
        },
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeFalsy();
    });

    it('should NOT match string to object', () => {
      expect(
        isDeepObjectMatch('spot/ticker:BTC_USDT', {
          topic: 'spot/ticker:BTC_USDT',
        }),
      ).toBeFalsy();
    });
  });
});

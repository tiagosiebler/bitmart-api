export interface SpotLatestKlineV3Request {
  symbol: string;
  before?: number;
  after: number;
  step?: number;
  limit?: number;
}

export interface SpotBrokerRebateRequest {
  start_time?: number;
  end_time?: number;
}

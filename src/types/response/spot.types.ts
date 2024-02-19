export interface SystemTimeResult {
  server_time: number;
}

export interface SpotBrokerRebateRow {
  currency: string;
  rebate_amount: string;
}

export interface SpotBrokerRebateResult {
  rebates: {
    [date: string]: SpotBrokerRebateRow[];
  };
}

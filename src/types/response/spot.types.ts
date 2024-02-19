export interface SpokeBrokerRebateRow {
  currency: string;
  rebate_amount: string;
}

export interface SpotBrokerRebateResult {
  rebates: {
    [date: string]: SpokeBrokerRebateRow[];
  };
}

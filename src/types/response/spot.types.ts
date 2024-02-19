export interface SystemTimeResult {
  server_time: number;
}

export interface GetServiceSystemStatusResponse {
  service: Array<{
    title: string;
    service_type: string;
    status: number;
    start_time: number;
    end_time: number;
  }>;
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

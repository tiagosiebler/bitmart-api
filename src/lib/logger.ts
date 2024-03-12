export type LogParams = null | any;

export const DefaultLogger = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trace: (...params: LogParams): void => {
    // console.log(params);
  },
  info: (...params: LogParams): void => {
    console.info(params);
  },
  warning: (...params: LogParams): void => {
    console.error(params);
  },
  error: (...params: LogParams): void => {
    console.error(params);
  },
};

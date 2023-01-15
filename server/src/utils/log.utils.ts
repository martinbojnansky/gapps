export const returnWithLog = (msg: string): string => {
  Logger.log(msg);
  return msg;
}
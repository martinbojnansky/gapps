import { Actions } from "../../api/api";

export function api<
  TKey extends keyof Actions,
  TPayload = Actions[TKey][0],
  TResponse = Actions[TKey][1]
>(
  action: TKey,
  payload: TPayload,
  subscriber?: {
    onSuccess?: (response: TResponse) => void;
    onError?: (err: Error) => void;
  }
): void {
  google.script.run
    .withSuccessHandler((response: TResponse) => {
      console.log("GApps OK", response);
      subscriber?.onSuccess?.(response);
    })
    .withFailureHandler((err: Error) => {
      console.log("GApps ERR", err);
      if (subscriber?.onError) {
        subscriber.onError(err);
      } else {
        throw err;
      }
    })
    .doPost({
      postData: {
        contents: JSON.stringify({ ...{ action }, ...{ payload } }),
      },
    });
}

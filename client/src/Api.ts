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
      console.log("GApp ok", response);
      subscriber?.onSuccess?.(response);
    })
    .withFailureHandler((err: Error) => {
      console.log("GApp error", err);
      subscriber?.onError?.(err);
    })
    .doPost({
      postData: {
        contents: JSON.stringify({ ...{ action }, ...{ payload } }),
      },
    });
}

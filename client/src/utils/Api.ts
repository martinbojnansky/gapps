import { Actions } from '../../../api/api';

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
    .withSuccessHandler((response: any) => {
      try {
        subscriber?.onSuccess?.(JSON.parse(response) as TResponse);
      } catch {
        subscriber?.onSuccess?.(response as TResponse);
      }
    })
    .withFailureHandler((err: Error) => {
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

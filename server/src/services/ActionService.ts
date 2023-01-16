export abstract class ActionService<TPayload, TRes> {
  abstract run(payload: TPayload): TRes;
}

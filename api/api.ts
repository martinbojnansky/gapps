export interface ActionRequest {
  action: keyof Actions;
  payload: unknown;
}

export interface Actions {
  getGreeting: [string, string];
}

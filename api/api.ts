export interface ActionRequest {
  action: keyof Actions;
  payload: unknown;
}

export interface Actions {
  initState: [[], State];
}

export interface State {
  greeting: string;
}

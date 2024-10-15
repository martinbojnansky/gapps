export interface ActionRequest {
  action: keyof Actions;
  payload: unknown;
}

export interface Actions {
  getEventsForDay: [string, State];
}

export interface State {
  selectedDate: string;
  events: string[];
}

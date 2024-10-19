export interface ActionRequest {
  action: keyof Actions;
  payload: unknown;
}

export interface Actions {
  getSlotsForDay: [string, State];
}

export interface Slot {
  start: string;
  end: string;
  tennis1: string;
  tennis2: string;
  pickle1: string;
  pickle2: string;
  pro: string;
}

export interface State {
  selectedDate: string;
  slots: Slot[];
}

import { ActionService } from "./action.service";

export class GetGreetingService extends ActionService<string, string> {
  constructor() {
    super();
  }

  run(payload: string): string {
    return `Hello, ${payload}!`;
  }
}
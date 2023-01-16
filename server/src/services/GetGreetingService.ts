import { ActionService } from "./ActionService";

export class GetGreetingService extends ActionService<string, string> {
  constructor() {
    super();
  }

  run(payload: string): string {
    return `Hello, ${payload}!`;
  }
}

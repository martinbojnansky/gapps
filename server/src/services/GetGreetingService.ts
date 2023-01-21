import { ActionService } from './ActionService';

export class GetGreetingService extends ActionService<string, string> {
  run(payload: string): string {
    return `Hello, ${payload}!`;
  }
}

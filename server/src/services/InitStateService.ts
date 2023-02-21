import { State } from '../../../api/api';
import { ActionService } from './ActionService';

export class InitStateService extends ActionService<[], State> {
  run(payload: []): State {
    return { greeting: `Hello, howdy?` };
  }
}

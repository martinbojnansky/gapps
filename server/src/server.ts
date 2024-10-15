import { ActionService } from './services/ActionService';
import { ActionRequest, Actions } from '../../api/api';
import { GetEventsForDayService } from './services/GetEventsForDayService';

const serviceProviders: {
  [TKey in keyof Actions]: () => ActionService<
    Actions[TKey][0],
    Actions[TKey][1]
  >;
} = {
  getEventsForDay: () => new GetEventsForDayService(),
};

export default {
  doGet: () => {
    const template = HtmlService.createTemplateFromFile('index');
    let output = template.evaluate();
    output = output.setXFrameOptionsMode(
      HtmlService.XFrameOptionsMode.ALLOWALL
    );
    return output;
  },

  doPost: (e: { postData: { contents: string } }) => {
    try {
      const request: ActionRequest = JSON.parse(e.postData.contents);
      const service = serviceProviders[request.action]();
      const response: unknown = service.run(request.payload as any);
      return response instanceof Object ? JSON.stringify(response) : response;
    } catch (ex) {
      throw ex;
    }
  },
};

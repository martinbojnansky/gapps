import { ActionService } from "./services/action.service";
import { ActionRequest, Actions } from "../../api/api";
import { GetGreetingService } from "./services/getGreeting.service";

const serviceProviders: {
  [TKey in keyof Actions]: () => ActionService<Actions[TKey][0], Actions[TKey][1]>;
} = {
  getGreeting: () => new GetGreetingService()
};

export default {
  
  doGet: () => {
    const template = HtmlService.createTemplateFromFile('index');
    return template.evaluate();
  },

  doPost: (e: { postData: { contents: string } }) => {
    try {
      const request: ActionRequest = JSON.parse(e.postData.contents);
      const service = serviceProviders[request.action]();
      const response = service.run(request.payload as any);
      return JSON.stringify(response);
    } catch(ex) {
      throw ex;
    }
  }
  
}



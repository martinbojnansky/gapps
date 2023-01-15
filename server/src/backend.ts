export default {
  
  doGet: () => {
    const template = HtmlService.createTemplateFromFile('index');
    return template.evaluate();
  },

  doPost: (e: { parameter: { command: string } }) => {
    return JSON.stringify(e.parameter);
  }
  
}



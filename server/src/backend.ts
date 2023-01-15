export default {
  
  doGet: () => {
    const template = HtmlService.createTemplateFromFile('index');
    return template.evaluate();
  },

  doPost: (e: { parameter: { command: string } }) => {
    return ContentService.createTextOutput(JSON.stringify(e.parameter));
  }
  
}



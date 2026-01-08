/**
 * Returns an HTML page with the calendar view.
 *
 * This function is called when the Apps Script web app is accessed.
 *
 * @return {HtmlOutput} The HTML content of the calendar view.
 * @throws {Error} If the calendar view HTML file cannot be found or if there is an error in the HTML template.
 */
function doGet() {
  const t = HtmlService.createTemplateFromFile('index');
  t.calendarId = getOrCreateCalendar().getId();
  return t
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Includes the content of a file in the current HTML output.
 *
 * @param {string} filename - The name of the file to include.
 * @return {string} The content of the file.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Returns a calendar with the given name, creating a new one if it does not already exist.
 *
 * @return {Calendar} The calendar with the given name.
 */
function getOrCreateCalendar() {
  const name = 'Ice Baths';
  const cal = CalendarApp.getCalendarsByName(name)[0];
  if (!cal) {
    cal = CalendarApp.createCalendar(name);
  }
  return cal;
}

/**
 * Logs an ice bath event to the calendar.
 *
 * @param {Object} iceBath - An object containing the start and end date of the ice bath, as well as the water temperature.
 *
 * @return {Object} - An object containing the HTTP status code of the response.
 */

function logIceBath(iceBath) {
  const cal = getOrCreateCalendar();
  cal.createEvent('Ice Bath', new Date(iceBath.start), new Date(iceBath.end), {
    description: JSON.stringify(iceBath),
  });
  return { statusCode: 201 };
}

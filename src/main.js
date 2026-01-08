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
  const name = 'Log Book';
  const cal = CalendarApp.getCalendarsByName(name)[0];
  if (!cal) {
    cal = CalendarApp.createCalendar(name);
  }
  return cal;
}

/**
 * Adds a calendar event based on the given event object.
 *
 * The event object should contain the following properties:
 * - title: The title of the event.
 * - start: The start time of the event in milliseconds since the Unix epoch.
 * - end: The end time of the event in milliseconds since the Unix epoch.
 *
 * @param {Object} event - The event object.
 * @return {Object} An object with a single property, statusCode, set to 201.
 */
function addCalendarEvent(event) {
  const cal = getOrCreateCalendar();
  cal.createEvent(event.title, new Date(event.start), new Date(event.end), {
    description: JSON.stringify(event),
  });
  return { statusCode: 201 };
}

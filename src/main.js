function doGet() {
  const t = HtmlService.createTemplateFromFile('index');
  t.calendarId = getOrCreateCalendar().getId();
  return t
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getOrCreateCalendar() {
  const name = 'Ice Baths';
  const cal = CalendarApp.getCalendarsByName(name)[0];
  if (!cal) {
    cal = CalendarApp.createCalendar(name);
  }
  return cal;
}

function logIceBath(iceBath) {
  const cal = getOrCreateCalendar();
  cal.createEvent('Ice Bath', new Date(iceBath.start), new Date(iceBath.end), {
    description: JSON.stringify(iceBath),
  });
  return { statusCode: 201 };
}

function doGet() {
  const t = HtmlService.createTemplateFromFile("index");
  t.calendarId = getOrCreateCalendar().getId();
  return t.evaluate();
}

function getOrCreateCalendar() {
  const name = "Habits";
  const cal = CalendarApp.getCalendarsByName(name)[0];
  if (!cal) {
    cal = CalendarApp.createCalendar(name);
  };
  return cal;
}

function submitHabit(habit, values) {
  const cal = getOrCreateCalendar();
  const now = new Date();

  const description = Object.entries(values)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  cal.createEvent(habit, now, now, { description });

  return "OK";
}

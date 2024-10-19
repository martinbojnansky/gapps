import { State } from '../../../api/api';
import { ActionService } from './ActionService';

export class GetSlotsForDayService extends ActionService<string, State> {
  run(selectedDateString: string): State {
    const calendar = CalendarApp.getCalendarById(
      '8ff0bc715be6e95e38d105ca6fe401c934c017ac8f38cf7eb115b53c4a376bc0@group.calendar.google.com' // TODO: Make this configurable
    );
    const selectedDate = new Date(selectedDateString);
    const events = calendar.getEventsForDay(selectedDate);
    return {
      selectedDate: selectedDate.toISOString(),
      slots: events.map((e) => ({
        ...JSON.parse(`${e.getDescription()}`),
        start: e.getStartTime().toISOString(),
        end: e.getEndTime().toISOString(),
      })),
    };
  }
}

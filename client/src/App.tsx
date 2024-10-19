import { Component, createSignal, For, onMount } from 'solid-js';
import styles from './App.module.scss';
import { api } from './utils/Api';
import { Slot } from '../../api/api';
import TimeSlotCell from './components/TimeSlotCell';
import CourtSlotCell from './components/CourtSlotCell';

const App: Component = () => {
  const [selectedDate, setSelectedDate] = createSignal<Date>(new Date());
  const [slots, setSlots] = createSignal<Slot[]>([]);

  onMount(() => {
    setSlots([]); // TODO: Show loading
    api('getSlotsForDay', selectedDate().toISOString(), {
      onSuccess: (state) => {
        setSelectedDate(new Date(state.selectedDate));
        setSlots(state.slots);
      },
      onError: (err) => setSlots([]), // TODO: Display error
    });
  });

  return (
    <div class="d-flex flex-column">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            🎾 GBC - Tennis Reservations
          </a>
        </div>
      </nav>
      <main class="px-4 py-3">
        <div class="d-flex flex-column align-items-center">
          <p>{selectedDate().toDateString()}</p>
          <div class="d-flex flex-row">
            <span>Filters:</span>
            <span class="badge bg-secondary">Tennis free</span>
            <span class="badge bg-secondary">Pickle free</span>
            <span class="badge bg-secondary">Pro free</span>
            <span class="badge bg-secondary">Pro booked</span>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Time Slot</th>
                <th>Tennis 1</th>
                <th>Tennis 2</th>
                <th>Pickle 1</th>
                <th>Pickle 2</th>
                <th>Pro</th>
              </tr>
            </thead>
            <tbody>
              <For each={slots()}>
                {(slot) => (
                  <tr>
                    <td>
                      <TimeSlotCell start={slot.start} end={slot.end} />
                    </td>
                    <td>
                      <CourtSlotCell value={slot.tennis1} />
                    </td>
                    <td>
                      <CourtSlotCell value={slot.tennis2} />
                    </td>
                    <td>
                      <CourtSlotCell value={slot.pickle1} />
                    </td>
                    <td>
                      <CourtSlotCell value={slot.pickle2} />
                    </td>
                    <td>
                      <CourtSlotCell value={slot.pro} />
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default App;

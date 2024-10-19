import { Component, createEffect, createSignal, For, onMount } from 'solid-js';
import styles from './App.module.scss';
import { api } from './utils/Api';
import { Slot } from '../../api/api';
import TimeSlotCell from './components/TimeSlotCell';
import CourtSlotCell from './components/CourtSlotCell';
import ProgressRow from './components/ProgressRow';
import DatePicker from './components/DatePicker';

const App: Component = () => {
  const [busy, setBusy] = createSignal<boolean>(false);
  const [selectedDate, setSelectedDate] = createSignal<string>(
    new Date().toISOString()
  );
  const [slots, setSlots] = createSignal<Slot[]>([]);
  const [filteredSlots, setFilteredSlots] = createSignal<Slot[]>([]);

  createEffect(() => {
    setBusy(true);
    setSlots([]);
    api('getSlotsForDay', selectedDate(), {
      onSuccess: (state) => {
        setSelectedDate(state.selectedDate);
        setSlots(state.slots);
        setBusy(false);
      },
      onError: (err) => {
        setSlots([]);
        setBusy(false);
      },
    });
  });

  createEffect(() => {
    setFilteredSlots(slots());
  });

  onMount(() => {});

  return (
    <div class="d-flex flex-column">
      {/* navbar */}
      <nav class="navbar bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            🎾 GBC - Tennis Reservations
          </a>
        </div>
      </nav>
      {/* main */}
      <main class="px-4 py-3">
        <div class="d-flex flex-column">
          {/* date picker */}
          <div class="d-flex flex-row mb-3 align-self-start">
            <DatePicker
              value={selectedDate()}
              onValueChange={setSelectedDate}
            />
          </div>
          {/* table */}
          <table class="table">
            {/* table header */}
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
            {/* table body */}
            <tbody>
              {/* progress row */}
              <ProgressRow visible={busy()} colSpan={6} />
              {/* table rows */}
              <For each={filteredSlots()}>
                {(slot) => (
                  <>
                    <tr>
                      <th>
                        <TimeSlotCell start={slot.start} end={slot.end} />
                      </th>
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
                  </>
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

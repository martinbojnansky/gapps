import { Component, createSignal, onMount } from 'solid-js';
import styles from './App.module.scss';
import { api } from './utils/Api';

const App: Component = () => {
  const [selectedDate, setSelectedDate] = createSignal<Date>(new Date());
  const [events, setEvents] = createSignal<string>('...');

  onMount(() => {
    setEvents('Please wait...');
    api('getEventsForDay', selectedDate().toISOString(), {
      onSuccess: (state) => {
        setSelectedDate(new Date(state.selectedDate));
        setEvents(state.events.join(', '));
      },
      onError: (err) => setEvents('Network error, try again, please.'),
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
        <div class="d-flex flex-row justify-content-center">
          <p>{selectedDate().toString()}</p>
          <h1>{events()}</h1>
        </div>
      </main>
    </div>
  );
};

export default App;

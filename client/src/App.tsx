import { Component, createSignal, onMount } from 'solid-js';
import styles from './App.module.scss';
import { api } from './utils/Api';

const App: Component = () => {
  const [text, setText] = createSignal<string>('...');

  onMount(() => {
    setText('Please wait...');
    api('getGreeting', 'Martin', {
      onSuccess: (greeting) => setText(greeting),
      onError: (err) => setText('Network error, try again, please.'),
    });
  });

  return (
    <div class="d-flex flex-column">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            🔥 GApps
          </a>
        </div>
      </nav>
      <main class="px-4 py-3">
        <div class="d-flex flex-row justify-content-center">
          <h1>{text}</h1>
        </div>
      </main>
    </div>
  );
};

export default App;

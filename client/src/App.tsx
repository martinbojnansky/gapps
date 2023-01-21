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
    <div class="d-flex flex-row justify-content-center">
      <h1 class="p-5">{text}</h1>
    </div>
  );
};

export default App;

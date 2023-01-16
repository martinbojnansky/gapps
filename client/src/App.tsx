import { Component, createSignal, onMount } from 'solid-js';
import styles from './App.module.css';
import { api } from './Api';

const App: Component = () => {
  const [text, setText] = createSignal<string>('...');
  
  onMount(async () => {
    setText('Please wait...');
    api('getGreeting', 'Martin', {
      onSuccess: greeting => setText(greeting),
      onError: err => setText('Error. Try again, please.')
    })
  });
  
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          { text }
        </p>
      </header>
    </div>
  );
};

export default App;

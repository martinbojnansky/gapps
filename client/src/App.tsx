import { Component, createSignal, onMount } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  const [text, setText] = createSignal<string>('...');
  
  onMount(async () => {
    setText('Please wait...');
    google.script.run
      .withSuccessHandler((response: string) => {
        setText(response);
      })
      .withFailureHandler((err: any) => {

      })
      .doPost({ parameter: { command: 'xyz' }});
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

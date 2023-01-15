import { Component, createSignal, onMount } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  const [text, setText] = createSignal<string>('...');
  
  onMount(async () => {
    setText('Please wait...');
    const response = await fetch(`https://script.google.com/macros/s/AKfycbxoduFncCTz0gTtsYG2xT-BMOu3vXRE4BmZtomrJDvfKLbP_jIWFQkydhZvajGus7uC/exec?command=xyz`, { method: 'POST' });
    setText(await response.json());
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

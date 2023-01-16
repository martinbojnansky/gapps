import { Component, createSignal, onMount } from 'solid-js';
import styles from './AppView.module.scss';
import { api } from '../../utils/Api';

const AppView: Component = () => {
  const [text, setText] = createSignal<string>('...');
  
  onMount(async () => {
    setText('Please wait...');
    api('getGreeting', 'Martin', {
      onSuccess: greeting => setText(greeting),
      onError: err => setText('Error. Try again, please.')
    })
  });
  
  return (
    <div class={styles.AppView}>
      <header class={styles.header}>
        <p>
          { text }
        </p>
      </header>
    </div>
  );
};

export default AppView;

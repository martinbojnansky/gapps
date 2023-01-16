/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/main.scss';
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);

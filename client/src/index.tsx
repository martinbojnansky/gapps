/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/main.scss';
import AppView from './views/app/AppView';

render(() => <AppView />, document.getElementById('root') as HTMLElement);

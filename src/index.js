import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Game} from './components/game';
import registerServiceWorker from './registerServiceWorker';
import '../src/index.css'
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Game />,
  rootElement);

registerServiceWorker();

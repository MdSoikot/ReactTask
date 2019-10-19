import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';

import HomePage from "./views/HomePage";
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));


serviceWorker.unregister();

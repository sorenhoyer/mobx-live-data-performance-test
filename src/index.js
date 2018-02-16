import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootStore from './stores';

ReactDOM.render(<App store={rootStore}/>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import RootStore from './stores';

ReactDOM.render(<App store={new RootStore()}/>, document.getElementById('root'));
registerServiceWorker();

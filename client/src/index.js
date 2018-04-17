import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const element = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={App} />
        </Router>
    </Provider>,
    element
);

registerServiceWorker();

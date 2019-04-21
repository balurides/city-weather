import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

const store = createStore(reducers,composeEnhancers(
    applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store= {store}>
        <App />
    </Provider>,
    document.getElementById('root'));

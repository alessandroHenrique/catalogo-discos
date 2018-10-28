import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import AppContainer from './components/AppContainer';
import * as serviceWorker from './serviceWorker';
import Store from './store/configureStore';
import { Provider } from 'react-redux';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import { signin, signout } from './redux/actions/loginAction';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//store.dispatch(signin);
//store.dispatch(signout);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

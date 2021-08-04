import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css'
import rootReducer from './store/reducers/rootReducer';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirebaseInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import fbconfig from './config/fbconfig'
import { Provider } from 'react-redux';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))
),
  reduxFirestore(fbconfig)
)

const rrfProps = {
  firebase,
  config, fbconfig,
  dispatch: store.dispatch,
  createFirebaseInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
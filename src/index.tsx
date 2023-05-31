import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { fetchProductsAction, fetchPromoProductAction } from './store/api-actions';

import App from './components/app/app';

store.dispatch(fetchPromoProductAction());
store.dispatch(fetchProductsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

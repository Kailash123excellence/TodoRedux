import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/myStyle.css'
import { Provider } from 'react-redux/es/exports';

import Store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>
);


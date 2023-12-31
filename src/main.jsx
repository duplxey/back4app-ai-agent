import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Parse from 'parse';

Parse.initialize(
  'X3d95t23NNs0w22KHLRWk2o7UnJIvbdZLmAl8uoV',
  'bfNMmPOO9PvfuItctwqX71tAYJIXdcn6l2lwK9gq',
);
Parse.serverURL = 'https://parseapi.back4app.com/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);

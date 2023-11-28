import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Parse from 'parse';

const PARSE_APPLICATION_ID = import.meta.env.VITE_PARSE_APPLICATION_ID;
const PARSE_JAVASCRIPT_KEY = import.meta.env.VITE_PARSE_JAVASCRIPT_KEY;
Parse.initialize(
  PARSE_APPLICATION_ID,
  PARSE_JAVASCRIPT_KEY,
);
Parse.serverURL = 'https://parseapi.back4app.com/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";
import ReactDOM from 'react-dom';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);

reportWebVitals(console.log);

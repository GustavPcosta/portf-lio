import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import MainRouts from './routs';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouts/>
    </BrowserRouter>
  </React.StrictMode>
);


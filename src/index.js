import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './scss/app.scss';

import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Route exact path="/" component={App} /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

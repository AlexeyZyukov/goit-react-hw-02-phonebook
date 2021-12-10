import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// import App from './App';
import Phonebook from './phonebook';

ReactDOM.render(
  <React.StrictMode>
    <Phonebook />
  </React.StrictMode>,
  document.querySelector('#root'),
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStles from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStles />
    <App />
  </React.StrictMode>
);
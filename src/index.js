import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"


/*
React configuration
*/

// import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

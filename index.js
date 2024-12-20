import React from 'react';
import ReactDOM from 'react-dom/client'; // Update to 'react-dom/client' for React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with the router
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const config = {
  scope: "/",
  registerOptions: {
    updateViaCache: "none"
  },
  onSuccess: (registration) => {
    console.log("Service worker registration successful:", registration);
  },
  onUpdate: (registration) => {
    console.log("Service worker update available:", registration);
  },
};


serviceWorkerRegistration.register(config);

reportWebVitals();

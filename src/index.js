import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const url = "https://my-json-server.typicode.com/theroughcoder/json-server";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* render the app component */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);




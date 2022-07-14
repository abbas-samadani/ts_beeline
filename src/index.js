import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductContextProvider } from './context/ProductContext';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>
);

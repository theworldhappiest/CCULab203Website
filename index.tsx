import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. 這裡要引入
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* 2. 重點在這裡！一定要用 BrowserRouter 把 App 包起來 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
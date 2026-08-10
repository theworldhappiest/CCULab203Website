import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. 改成引入 HashRouter
import { HashRouter } from 'react-router-dom'; 
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* 2. 改用 HashRouter 把 App 包起來 */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
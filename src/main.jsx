// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Enable React 18 concurrent rendering
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Did you forget <div id='root'></div> in index.html?");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{ v7_startTransition: true }} // prepares for React Router v7 concurrency
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

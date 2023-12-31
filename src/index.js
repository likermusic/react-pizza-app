import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/app.scss";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
// import AppRouter from './routes/AppRouter';

import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // <Provider store={store}>
  //   <App1 />
  // </Provider>
);

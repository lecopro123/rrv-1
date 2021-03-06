import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import Main from "./main";
//import { BrowserRouter } from 'react-router-dom';
import { ConfigStore } from "./Redux/ConfigureStore";
import { BrowserRouter } from 'react-router-dom';

const store = ConfigStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

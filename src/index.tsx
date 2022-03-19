/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

// eslint-disable-next-line react/react-in-jsx-scope
ReactDOM.render(<App />, document.getElementById("root"));

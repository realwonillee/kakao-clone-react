import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../Main";
import GlobalStyles from "../../globalStyles";

const Presenter: React.FC = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Main} />
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default Presenter;

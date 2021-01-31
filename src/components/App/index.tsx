import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chats from "../Chats";
import Chat from "../Chat";
import GlobalStyles from "../../globalStyles";

const Presenter: React.FC = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/chat" component={Chat} />
        <Route exact={true} path="*" component={Chats} />
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default Presenter;

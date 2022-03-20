import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Chat from './pages/Chat';
import Friends from './pages/Friends';

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/friends" component={Friends} />
                <Route exact={true} path="/chat" component={Chat} />
                <Route path="*" component={Chat} />
            </Switch>
        </BrowserRouter>
        <GlobalStyles />
    </>
);

export default App;

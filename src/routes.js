import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Confirm from './pages/Confirm';
import Purchase from './pages/Purchase';
import Finish from './pages/Finish';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/purchase" component={Purchase} exact />
        <Route path="/confirm" component={Confirm} exact />
        <Route path="/finish" component={Finish} exact />
      </Switch>
    </BrowserRouter>
  );
}

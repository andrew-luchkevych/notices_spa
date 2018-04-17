import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Notices from './container/Notices';
export default () => (
    <Switch>
      <Route exact path='/' component={Notices}/>
    </Switch>
);
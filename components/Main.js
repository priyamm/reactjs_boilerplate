import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home.jsx';
import Roster from './Roster';
import Schedule from './Schedule';

const Main = () => (
  <main>
    <Switch>
      <Route path = '/user' component = {Home} />
      <Route path = '/roster' component = {Roster} />
      <Route path = '/schedule' component = {Schedule} />
    </Switch>
  </main>
);

export default Main;

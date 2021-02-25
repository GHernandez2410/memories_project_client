import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { Container } from '@material-ui/core';

import Header from './components/Header/Header';
import MemoriesPage from './pages/MemoriesPage';

import { history } from "./helpers/history";

const App = () => {

  return (
    <Router history={history}>
      <Container maxWidth="lg">
        <Header />
        <Switch>
          <Route exact path={["/", "/memories"]} component={MemoriesPage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
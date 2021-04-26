import React, { ReactElement } from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/TasksPage";
import Navigation from "./Navigation";
import { toAuthor, toTasks } from "./routes";

const App = (): ReactElement => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toAuthor()} component={AuthorPage} />
      <Route path={toTasks()} component={TasksPage} />
      <Route path="/">
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
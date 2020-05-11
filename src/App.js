import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Entryway from "./components/Entryway";
import PlayerSelection from "./components/PlayerSelection";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Entryway />
        </Route>
        <Route path="/:gameId">
          <PlayerSelection />
        </Route>
        <Route>
          <Entryway />
        </Route>
      </Switch>
    </Router>
  );
}

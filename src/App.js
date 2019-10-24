import React from 'react';
import './App.css';
import HomePage from "./components/HomePage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              {/*<Route exact path="/add">*/}
              {/*    <CounterWithReduxState />*/}
              {/*</Route>*/}
          </Switch>

        <HomePage />
      </header>
    </div>
  );
}

export default App;

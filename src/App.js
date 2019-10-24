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
          <Router>
              <div>
                  <ul>
                      <li>
                          <Link to="/"> Home </Link>
                      </li>
                  </ul>

                  <hr />

                  <Switch>
                      <Route exact path="/">
                          <HomePage />
                      </Route>
                  </Switch>
              </div>
          </Router>
      </header>
    </div>
  );
}

export default App;

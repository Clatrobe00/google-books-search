import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <div className="App">
      <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Search</Link>
                </li>
                <li>
                  <Link to="/Saved">Saved</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/Saved">
                <Saved />
              </Route>
              <Route path="/">
                <Search />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}


export default App;

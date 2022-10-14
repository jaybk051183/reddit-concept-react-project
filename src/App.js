import './App.css';
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit"

import {
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
      <>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/subreddit/:id">
            <Subreddit/>
          </Route>
        </Switch>

          <footer className="outer-content-container">
              <div className="inner-content-container">
                  In opdracht van NOVI Hogeschool @ 2022
              </div>
          </footer>

      </>
  );
}

export default App;


// 1. Create new react project in webstorm.
// 2. Create folder tree with js and css files.
// 3. Install the relevant package managers: npm install  / axios / react-router-dom@5.2.0
// 4. Set up routing structure in App.js

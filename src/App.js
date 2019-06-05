import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./Context";
import Index from "./components/Index";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <Search />
          <Switch>
            <div className="container mb-5">
              <div className="row">
                <Route exact path="/" component={Index} />
              </div>
            </div>
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;

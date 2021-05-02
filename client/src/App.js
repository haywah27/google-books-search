import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Switch>
          <Route exact path="/" component={SearchBook} />
          <Route exact path="/library" component={SavedBooks} />
        </Switch>
    </Router>
    </>
  );
}

export default App;

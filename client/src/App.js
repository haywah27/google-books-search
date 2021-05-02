import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../src/components/Nav/Nav"
import SearchBook from "./pages/Search/Search"
import SavedBooks from "../src/pages/Saved/Save"
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Switch>
          <Route exact path="/" component={SearchBook} />
          <Route exact path="/saved-books" component={SavedBooks} />
        </Switch>
    </Router>
    </>
  );
}

export default App;

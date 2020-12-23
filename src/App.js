import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import PopularRepositories from "./Components/PopularRepositories";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/explore" exact component={PopularRepositories} />
    </Router>
  );
}

export default App;

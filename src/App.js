import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import PopularRepositories from "./Components/PopularRepositories";
import Battle from "./Components/Battle";
import BattleResults from "./Components/BattleResults";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/" exact component={Battle} />
      <Route path="/explore" exact component={PopularRepositories} />
      <Route path="/results" exact component={BattleResults} />
    </Router>
  );
}

export default App;

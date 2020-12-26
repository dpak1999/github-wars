import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import PopularRepositories from "./Components/PopularRepositories";
import HomeComponent from "./Components/HomeComponent";
import Battle from "./Components/Battle";
import BattleResults from "./Components/BattleResults";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/" exact component={HomeComponent} />
      <Route path="/explore" exact component={PopularRepositories} />
      <Route path="/battle" exact component={Battle} />
      <Route path="/results" exact component={BattleResults} />
    </Router>
  );
}

export default App;

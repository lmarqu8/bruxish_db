import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import HomePage from "./components/HomePage.component"
import TeamsList from "./components/TeamsList.component"
import EditTeam from "./components/EditTeam.component"
import CreateTeam from "./components/CreateTeam.component"
import CreateUser from "./components/CreateUser.component"
import Pokedex from "./components/Pokedex.component"

function App() {
  return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={HomePage} />
          <Route path="/edit/:id" component={EditTeam} />
          <Route path="/create" component={CreateTeam} />
          <Route path="/user" component={CreateUser} />
          <Route path="/teams" component={TeamsList} />
          <Route path="/pokedex" component={Pokedex} />
        </div>
      </Router>
  );
}

export default App;

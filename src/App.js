import React from "react";
import { ReactDOM } from "react-dom";
import Header from './Header'
import HomePage from "./Home";
import Dashboard from "./Dashboard";
import Stats from "./Stats";
import Graph from "./Graph";

import './styles/dashboard.css'
import './styles/graph.css'
import './styles/header.css'
import './styles/homepage.css'
import './styles/sidebar.css'
import './styles/stats.css'


function App(){
  return(
    <div>
      <Dashboard/>
    </div>
  )
}

export default App;
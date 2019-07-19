import React from 'react';
import './App.css';
import Landing from './Landing.js';
import Calendar from './Calendar.js';
import { Router } from "@reach/router"

const App = () => (
  <Router>
    <Landing path="/" />
    <Calendar path="/calendar" />
  </Router>
);

export default App;

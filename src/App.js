import React from 'react';
import './App.css';
import Landing from './Landing.js';
import Calendar from './Calendar.js';
import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Landing />} />
      <Route path="calendar" element={<Calendar />} />
    </Route>
  </Routes>
);

export default App;

import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </Router>
  );
}

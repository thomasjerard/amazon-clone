import React from "react"
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/checkout" element={<div><Header /><Checkout /></div>}>
          </Route>
          <Route path = "/" element = {<div><Header /><Home /></div>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

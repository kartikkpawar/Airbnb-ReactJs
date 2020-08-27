import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchpage from "./components/Searchpage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <Searchpage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

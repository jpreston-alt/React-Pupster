import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import About from "./components/pages/About/index";
import Discover from "./components/pages/Discover/index";
import Search from "./components/pages/Search/index";
import './style.css';

function App() {
  return (
    <Router>
      <NavTabs />
      <Route exact path="/React-Pupster" component={About} />
      <Route exact path="/" component={About} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} />
      <Footer />
    </Router>
  );
}

export default App;

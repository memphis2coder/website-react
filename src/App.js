import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* styles */
import "./App.css";

/* Pages */
import About from "./Pages/About";
import Weather from "./Pages/Weather";

/* components */
import Nav from "./components/Nav/nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <div className="container">
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/weather" component={Weather} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;

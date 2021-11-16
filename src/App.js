import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage"
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Technologies from "./Components/Technologies/Technologies";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Technologies" component={Technologies} />
          <Route exact path="/Works" component={Works} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
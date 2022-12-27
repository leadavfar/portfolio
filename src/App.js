import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage"
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Technologies from "./Components/Technologies/Technologies";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import TheFoodPageInfo from "./Components/WorksInfo/TheFoodPageInfo/TheFoodPageInfo";
import CarshopInfo from "./Components/WorksInfo/CarshopInfo/CarshopInfo";
import LeChiefPageInfo from "./Components/WorksInfo/LeChiefPageInfo/LeChiefPageInfo";
import NotesNodeAppInfo from "./Components/WorksInfo/NotesNodeAppInfo/NotesNodeAppInfo";
import WeatherAppInfo from "./Components/WorksInfo/WeatherAppInfo/WeatherAppInfo";
import PortfolioInfo from "./Components/WorksInfo/PortfolioInfo/PortfolioInfo";

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
          <Route exact path="/Works/TheFoodPageInfo" component={TheFoodPageInfo} />
          <Route exact path="/Works/CarshopInfo" component={CarshopInfo} />
          <Route exact path="/Works/LeChiefPageInfo" component={LeChiefPageInfo} />
          <Route exact path="/Works/NotesNodeAppInfo" component={NotesNodeAppInfo} />
          <Route exact path="/Works/WeatherAppInfo" component={WeatherAppInfo} />
          <Route exact path="/Works/PortfolioInfo" component={PortfolioInfo} />
        </Switch>
      </div>
    </Router>
  );
}
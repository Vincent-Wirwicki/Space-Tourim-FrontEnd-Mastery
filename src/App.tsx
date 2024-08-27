import { Route, Switch } from "wouter";
import MainNav from "./component/nav/MainNav";
import data from "./data/data.json";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";

const App = () => {
  return (
    <div className="app__wrap">
      <MainNav />
      <main className="page__wrap">
        <Routing />
      </main>
    </div>
  );
};

export default App;

const Routing = () => {
  const { destinations, crew, technology } = data;
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/destination">
        <Destination data={destinations} />
      </Route>
      <Route path="/crew">
        <Crew data={crew} />
      </Route>
      <Route path="/technology">
        <Technology data={technology} />
      </Route>
    </Switch>
  );
};

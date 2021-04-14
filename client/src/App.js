import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallPage from "./components/CallPage/CallPage"
import HomePage from "./components/HomePage/HomePage"
import NotFound from "./components/NotFound/NotFound"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <CallPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

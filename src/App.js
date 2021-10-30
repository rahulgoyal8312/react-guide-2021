import Products from "./components/Products/Products";
import Header from "./components/Layout/Header"
import Subheader from "./components/Layout/Subheader";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthIndex from "./components/Auth";

const App = () => {
  return (
    <div>
      <Header/>
      <Subheader/>
      <Switch>
        <Route path="/:type(login|signup)" exact>
          <AuthIndex/>
        </Route>
        <Route path="/404" exact>
          <h1>Not Found!</h1>
        </Route>
        <Route path="/:category?" exact>
          <Products />
        </Route>
        <Redirect to="/404"/>
      </Switch>
    </div>
  );
}

export default App;

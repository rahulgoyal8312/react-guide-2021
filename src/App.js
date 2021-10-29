import Products from "./components/Products/Products";
import Header from "./components/Layout/Header"
import Subheader from "./components/Layout/Subheader";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header/>
      <Subheader/>
      <Switch>
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

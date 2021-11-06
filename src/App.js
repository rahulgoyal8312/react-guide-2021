import Products from "./components/Products/Products";
import Header from "./components/Layout/Header"
import Subheader from "./components/Layout/Subheader";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthIndex from "./components/Auth";
import { useEffect } from "react";
import { checkIsLoggedIn } from "./actions/auth";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(checkIsLoggedIn(() => {}))
  }, [])

  return (
    <div>
      <Header/>
      <Subheader/>
      <Switch>
        {
          !authState.idToken &&
          <Route path="/:type(login|signup)" exact>
            <AuthIndex/>
          </Route>
        }
        <Redirect to="/" from="/login"/>
        <Redirect to="/" from="/signup"/>
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

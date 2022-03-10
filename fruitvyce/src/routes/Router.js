import CartPage from "../pages/CartPage";
import InformationPage from "../pages/InformationPage";
import ListPage from "../pages/ListPage";
import ErrorPage from "../pages/ErrorPage";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Header from "../components/Header/Header";

const Router = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/list" > 
          <ListPage />
        </Route>

        <Route exact path="/cart">
          <CartPage />
        </Route>

        <Route exact path="/information/:name">
          <InformationPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

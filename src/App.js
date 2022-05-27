import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Core components
import Loader from "./components/loader";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import About from "./pages/About";
import SanatanDharma from "./pages/SanatanDharama";
import ContactUS from "./pages/ContactUs";
import AllOrder from "./pages/user/AllOrders";
import WishList from "./pages/Wishlist";
import PoojaPath from "./pages/PoojaPath";
import Vedh from "./pages/vedh";
import Stotra from "./pages/stotra"
import BuyNow from './pages/BuyNow';
const HomePage = lazy(() => import("./pages/Home"));
const AllProduct = lazy(() => import("./pages/ProductAll"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const AllArticle = lazy(() => import("./pages/ArticleAll"));
const ArticlesDetails = lazy(() => import("./pages/ArticlesDetails"));
const AllPooja = lazy(() => import("./pages/PoojaAll"));
const PoojaDetails = lazy(() => import("./pages/PoojaDetails"));

// Auth
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Profile = lazy(() => import("./pages/user/Profile"));

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route path="/" exact render={(props) => <HomePage {...props} />} />
            <Route
              path="/all-product"
              render={(props) => <AllProduct {...props} />}
            />
            <Route
              path="/wishlist"
              render={(props) => <WishList {...props} />}
            />
            <Route path="/cart" render={(props) => <Cart {...props} />} />
            <Route
              path="/product/:id"
              render={(props) => <ProductDetails {...props} />}
            />
            <Route
              path="/all-article"
              render={(props) => <AllArticle {...props} />}
            />
            <Route
              path="/article/:id"
              render={(props) => <ArticlesDetails {...props} />}
            />
            <Route
              path="/all-pooja"
              render={(props) => <AllPooja {...props} />}
            />
            <Route
              path="/pooja/:id"
              render={(props) => <PoojaDetails {...props} />}
            />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route
              path="/register"
              render={(props) => <Register {...props} />}
            />
            <Route path="/profile" render={(props) => <Profile {...props} />} />
            <Route path="/orders" render={(props) => <AllOrder {...props} />} />
            <Route path="/about" render={(props) => <About {...props} />} />
            <Route path="/STDH" render={(props) => <SanatanDharma {...props} />} />
            <Route path="/ContactUS" render={(props) => <ContactUS {...props} />} />
            <Route path="/PoojaPath" render={(props) => <PoojaPath {...props} />} />
            <Route path="/buynow" render={(props) => <BuyNow {...props} />} />
            <Route path="/Vedh" render={(props) => <Vedh {...props} />} />
            <Route path="/Stotra" render={(props) => <Stotra {...props} />} />
            <Route
              path="/checkout/:id"
              render={(props) => <CheckOut {...props} />}
            />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

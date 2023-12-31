import "./App.css";

import Login from "./Component/account/login";
import Register from "./Component/account/register";
import Header from "./Component/static/Header";
import Book from "./pages/Book";
import Home from "./pages/home";
import Packages from "./pages/Packages";
import PackageDetail from "./pages/packageDetail";

import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/contact";
import ReviewsPage from "./pages/ReviewsPage";
import NotFound from "./Component/static/Not Found";
import Footer from "./Component/static/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ethiopia from "./pages/Ethiopia/Ethiopia";

function App() {
  return (
    <div className="App">
      {/* <Content /> */}
      <Router>
        <div className="content">
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Header />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/book/:id">
                  <Book />
                </Route>
                <Route exact path="/package">
                  <Packages />
                </Route>
                <Route exact path="/package/:id">
                  <PackageDetail />
                </Route>
                <Route exact path="/cart">
                  <Cart />
                </Route>
                <Route exact path="/Ethiopia">
                  <Ethiopia />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>

                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/review/:id">
                  <ReviewsPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

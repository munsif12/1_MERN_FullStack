import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contect from "./Components/Contect/Contect";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Logout from "./Components/Logout/Logout";

function App() {
  const location = useLocation();
  return (
    <div className="App" id="bootstrap__overide_css_for__Navbar">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contect">
          <Contect />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/logout">
          <Logout />
        </Route>
        {/* if path not exists then show the error page */}
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      {location.pathname === "/" ? null : <Footer />}
    </div>
  );
}

export default App;

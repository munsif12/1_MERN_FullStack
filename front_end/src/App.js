import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contect from "./Components/Contect/Contect";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
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
        {/* if path not exists then show the error page */}
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

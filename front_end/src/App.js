import { createContext, useReducer } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Routes from "./Components/Routes/Routes";
import { initialState, reducer } from "./Components/Reducer/Reducer";
const loginLogoutContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  return (
    <div className="App" id="bootstrap__overide_css_for__Navbar">
      <loginLogoutContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes />
      </loginLogoutContext.Provider>
      {location.pathname === "/" ? null : <Footer />}
    </div>
  );
}

export default App;
export { loginLogoutContext };

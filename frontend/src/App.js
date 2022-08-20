import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
// components
import Toolbar from "./components/Toolbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Error from "./components/Error";
// react router dom
import { Switch, Route } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/reducer";

// Routing
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route component={Error} />
    </Switch>
  );
};

// create context
export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Toolbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;

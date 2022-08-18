import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
// components
import Toolbar from "./components/Toolbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Error from "./components/Error";
// react router dom
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Toolbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;

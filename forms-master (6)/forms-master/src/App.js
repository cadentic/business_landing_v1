import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormOne from "./pages/FormOne/FormOne";
import FormTwo from "./pages/FormTwo/FormTwo";
import FormThree from "./pages/FormThree/FormThree";
import "./App.css";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <FormOne />
        </Route>
        <Route path="/FormTwo">
          <FormTwo />
        </Route>
        <Route path="/FormThree">
          <FormThree />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

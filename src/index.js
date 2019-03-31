import React from "react";
import ReactDOM from "react-dom";
import Tickets from "./Tickets";
import TicketView from "./TicketView";
// THEME
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import muiTheme from "./theme/muiTheme";
// Route
import { Route, BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const routing = (
  <Router>
    <div>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Route exact path="/" component={Tickets} />
        <Route path="/details" component={TicketView} />
      </MuiThemeProvider>
    </div>
  </Router>
);

ReactDOM.render(routing, rootElement);

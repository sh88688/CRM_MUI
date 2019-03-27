import React from "react";
import ReactDOM from "react-dom";
import Tickets from "./Tickets";
import Detail from "./Detail";
import TicketUpdate from "./update";
import TicketAssign from "./TicketAssign";
import PrivateNote from "./privateNote";
import Timeline from "./Timeline";
// THEME
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import muiTheme from "./theme/muiTheme";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
const rootElement = document.getElementById("root");
const routing = (
  <Router>
    <div>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Route exact path="/" component={Tickets} />
        <Route exact path="/details" component={Detail} />
        <Route path="/ticketUpdate" component={TicketUpdate} />
        <Route path="/note" component={PrivateNote} />
        <Route path="/ticketAssign" component={TicketAssign} />
        <Route path="/timeline" component={Timeline} />
      </MuiThemeProvider>
    </div>
  </Router>
);

ReactDOM.render(routing, rootElement);

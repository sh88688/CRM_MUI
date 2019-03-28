import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DocketCard from "./Components/Card";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import SortIcon from "@material-ui/icons/Sort";
import ClearIcon from "@material-ui/icons/Clear";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import SortDialog from "./Components/SortDialog";
import SearchFilter from "./Components/SearchFilter";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  },
  sortMenuIcon: {
    marginLeft: "-24px",
    fontSize: "16px",
    color: "#009688",
    paddingRight: "15px"
  },
  icon: { fontSize: "20px" },
  iconButton: {
    padding: "9px"
  },
  container: { paddingLeft: "8px", width: "100%" },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class DemoCard extends React.Component {
  state = {
    sortOpen: false,
    searchOpen: false,
    data_list: [
      {
        docket_no: "T2019022800174",
        customer_name: "Nidhi Sharma",
        assigned_by: "GSTN_C00714_Richa_Gupta",
        assigned_on: "2019-03-01 18:15:12",
        created_on: "2019-02-25 16:15:26",
        ticket_status: "NEW",
        ticket_type: "Query",
        status_color: "orange",
        priority: "Critical",
        disposition: "Payment",
        sub_disposition: "Login issue",
        problem: "Unable to login at the portal."
      },
      {
        docket_no: "T2019022800175",
        customer_name: "Gaurav Sharma",
        assigned_by: "GSTN_C05126_Surbhi_Gupta",
        assigned_on: "2019-03-01 19:15:13",
        created_on: "2019-02-27 18:10:20",
        ticket_status: "ING",
        ticket_type: "Query",
        status_color: "skyblue",
        priority: "Severity 3",
        disposition: "Returns",
        sub_disposition: "GSTR-3B",
        problem: "Unable to file returns at the gst portal."
      },
      {
        docket_no: "T2019022800176",
        customer_name: "Rohit Verma",
        assigned_by: "GSTN_C05145_Vikas_Sharma",
        assigned_on: "2019-03-01 19:14:14",
        created_on: "2019-02-27 17:16:22",
        ticket_status: "NEW",
        ticket_type: "Ticket Created",
        status_color: "orange",
        priority: "Severity 3",
        disposition: "Tax Deduction",
        sub_disposition: "Tax Utility",
        problem: "Tax utility service not working at gst portal."
      },
      {
        docket_no: "T2019022800177",
        customer_name: "Gaurav Sharma",
        assigned_by: "GSTN_C05265_Angad_Kadian",
        assigned_on: "2019-03-02 17:15:56",
        created_on: "2019-02-27 14:16:22",
        ticket_status: "ACI",
        ticket_type: "Query",
        status_color: "green",
        priority: "Severity 3",
        disposition: "Returns",
        sub_disposition: "GSTR 2",
        problem: "Unable to upload JSON file."
      }
    ]
  };
  handleClickSortOpen = () => {
    this.setState({
      sortOpen: true
    });
  };

  handleSearchToggle = () => {
    this.setState({
      searchOpen: !this.state.searchOpen
    });
  };

  handleSortClose = value => {
    let data = this.state.data_list;
    switch (value) {
      case "Docket Number":
        data = data.sort((a, b) => (a.docket_no > b.docket_no ? 1 : -1));
        break;
      case "Person Name":
        data = data.sort((a, b) =>
          a.customer_name > b.customer_name ? 1 : -1
        );
        break;
      case "Assigned By":
        data = data.sort((a, b) => (a.assigned_by > b.assigned_by ? 1 : -1));
        break;
      case "Ticket Type":
        data = data.sort((a, b) => (a.ticket_type > b.ticket_type ? 1 : -1));
        break;
      case "Ticket Status":
        data = data.sort((a, b) =>
          a.ticket_status > b.ticket_status ? 1 : -1
        );
        break;
      case "Assigned On":
        data = data.sort((a, b) => (a.assigned_on > b.assigned_on ? 1 : -1));
        break;
      case "Priority":
        data = data.sort((a, b) => (a.priority > b.priority ? 1 : -1));
        break;
      case "Disposition Name":
        data = data.sort((a, b) => (a.disposition > b.disposition ? 1 : -1));
        break;
      case "Sub Disposition Name":
        data = data.sort((a, b) =>
          a.sub_disposition > b.sub_disposition ? 1 : -1
        );
        break;

      default:
        data = this.state.data_list;
        break;
    }
    this.setState({ data_list: data, sortOpen: false });
  };

  render() {
    const { classes } = this.props;
    const sortMenu = (
      <SortDialog
        selectedValue={this.state.selectedValue}
        open={this.state.sortOpen}
        onClose={this.handleSortClose}
      />
    );
    const searchFilter = (
      <SearchFilter
        open={this.state.searchOpen}
        onClose={this.handleSearchToggle}
      />
    );

    const docketCards = this.state.data_list.map((item, i) => (
      <Grid key={i} item xs={12}>
        <DocketCard key={i} data={item} />
      </Grid>
    ));

    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <ClearIcon className={classes.icon} />
            </IconButton>
            <Typography color="inherit" className={classes.grow}>
              28/02/19 - 28/03/19
            </Typography>
            <IconButton
              className={classes.iconButton}
              onClick={this.handleSearchToggle}
              color="inherit"
            >
              <SearchIcon className={classes.icon} />
            </IconButton>
            <IconButton
              aria-haspopup="true"
              className={classes.iconButton}
              onClick={this.handleClickSortOpen}
              color="inherit"
            >
              <SortIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.iconButton} color="inherit">
              <PrintIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.iconButton} color="inherit">
              <SaveIcon className={classes.icon} />
            </IconButton>
          </Toolbar>
        </AppBar>
        {searchFilter}
        {sortMenu}
        <br />
        <br />
        <br />
        <br />
        <Grid
          container
          className={classes.container}
          justify="center"
          spacing={8}
        >
          {docketCards}
        </Grid>
      </div>
    );
  }
}

DemoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DemoCard);

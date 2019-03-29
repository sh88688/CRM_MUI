import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/MoreVert";
import BackIcon from "@material-ui/icons/ArrowBack";
import UserIcon from "@material-ui/icons/Person";
import UpdateIcon from "@material-ui/icons/Update";
import TicketIcon from "@material-ui/icons/ConfirmationNumber";
import NoteIcon from "@material-ui/icons/Note";
import TimelineIcon from "@material-ui/icons/Schedule";

const styles = theme => ({
  root: {
    width: "90%",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1
  },
  divbar: {
    marginBottom: "85px"
  },
  menuItem: {
    paddingLeft: "0px",
    paddingRight: "12px"
  },
  icon: {
    fontSize: "20px",
    color: "#06796f"
  },
  menutext: {
    fontSize: "0.85rem",
    fontWeight: "400"
  },
  grow: {
    flexGrow: 1
  },
  heading: {
    fontSize: "1.05rem",
    fontWeight: "500",
    display: "flex"
  },
  container: {
    width: "100%",
    paddingLeft: "8px"
  },
  menu: {
    position: "absolute",
    right: "10px"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class docketBar extends React.Component {
  state = {
    selected: 0,
    open: false,
    open_master: false,
    open_mail: false,
    mobileMoreAnchorEl: null
  };

  handleMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };
  handleBasicDetailsClick = () => {
    // this.props.history.push("/details");
    this.props.onSelect(0);
    this.setState({ mobileMoreAnchorEl: null, selected: 0 });
  };
  handleUpdationClick = () => {
    // this.props.history.push("/ticketUpdate");
    this.props.onSelect(1);
    this.setState({ mobileMoreAnchorEl: null, selected: 1 });
  };
  handleAssignmentClick = () => {
    // this.props.history.push("/ticketAssign");
    this.props.onSelect(2);
    this.setState({ mobileMoreAnchorEl: null, selected: 2 });
  };
  handleNoteClick = () => {
    this.props.onSelect(3);
    // this.props.history.push("/note");
    this.setState({ mobileMoreAnchorEl: null, selected: 3 });
  };
  handleTimelineClick = () => {
    this.props.onSelect(4);
    // this.props.history.push("/timeline");
    this.setState({ mobileMoreAnchorEl: null, selected: 4 });
  };
  handleBackClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    const { mobileMoreAnchorEl } = this.state;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem
          className={classes.menuItem}
          onClick={this.handleBasicDetailsClick}
          selected={this.state.selected === 0}
        >
          <IconButton color="inherit">
            <UserIcon className={classes.icon} />
          </IconButton>
          <p className={classes.menutext}>Basic Details</p>
        </MenuItem>
        <MenuItem
          selected={this.state.selected === 1}
          className={classes.menuItem}
          onClick={this.handleUpdationClick}
        >
          <IconButton color="inherit">
            <UpdateIcon className={classes.icon} />
          </IconButton>
          <p className={classes.menutext}>Ticket Updation</p>
        </MenuItem>
        <MenuItem
          selected={this.state.selected === 2}
          className={classes.menuItem}
          onClick={this.handleAssignmentClick}
        >
          <IconButton color="inherit">
            <TicketIcon className={classes.icon} />
          </IconButton>
          <p className={classes.menutext}>Ticket Assignment</p>
        </MenuItem>
        <MenuItem
          selected={this.state.selected === 3}
          className={classes.menuItem}
          onClick={this.handleNoteClick}
        >
          <IconButton color="inherit">
            <NoteIcon className={classes.icon} />
          </IconButton>
          <p className={classes.menutext}>Private Note</p>
        </MenuItem>
        <MenuItem
          selected={this.state.selected === 4}
          className={classes.menuItem}
          onClick={this.handleTimelineClick}
        >
          <IconButton color="inherit">
            <TimelineIcon className={classes.icon} />
          </IconButton>
          <p className={classes.menutext}>Timeline</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton
              onClick={this.handleBackClick}
              color="inherit"
              aria-label="Menu"
            >
              <BackIcon />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="Menu"
              aria-haspopup="true"
              onClick={this.handleMobileMenuOpen}
              className={classes.menu}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        <div className={classes.divbar} />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(docketBar));

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import SortIcon from "@material-ui/icons/Sort";

const sortOptions = [
  "Docket Number",
  "Ticket Status",
  "Person Name",
  "Assigned By",
  "Ticket Type",
  "Priority",
  "Disposition Name",
  "Sub Disposition Name",
  "Assigned On"
];

const styles = {
  icon: {
    color: "#06796f",
    fontSize: "15px"
  }
};

class SortDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <div>
          <List>
            {sortOptions.map(sortOptions => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(sortOptions)}
                key={sortOptions}
              >
                <SortIcon className={classes.icon} />

                <ListItemText primary={sortOptions} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

SortDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

export default withStyles(styles)(SortDialog);

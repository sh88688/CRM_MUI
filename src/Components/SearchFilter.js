import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ClearIcon from "@material-ui/icons/Clear";
import FilterIcon from "@material-ui/icons/Filter";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const styles = {
  dialogTitle: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "15px 15px 10px"
  },
  dialogActions: {
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    paddingTop: "10px"
  },
  clearButton: {
    top: "5px",
    position: "absolute",
    right: "8px"
  },
  icon: {
    fontSize: "18px"
  },
  paper: {
    borderRadius: "2px"
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SearchFilter extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { classes, onClose, ...other } = this.props;

    return (
      <div>
        <Dialog
          fullScreen
          {...other}
          classes={{
            paper: classes.paper
          }}
          className={classes.dialogTitle}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          TransitionComponent={Transition}
        >
          <DialogTitle className={classes.dialogTitle} id="form-dialog-title">
            <Typography color="secondary" variant="button">
              Filters
            </Typography>
            <IconButton
              onClick={this.handleClose}
              className={classes.clearButton}
              color="inherit"
            >
              <ClearIcon className={classes.icon} />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <br />
            <TextField
              margin="dense"
              id="docket"
              label="Docket Number"
              type="text"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="dense"
              id="mobile"
              label="Mobile Number"
              type="tel"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Email ID"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Person Name"
              type="text"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="dense"
              id="from"
              label="From"
              type="date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              margin="dense"
              id="to"
              label="To"
              type="date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button onClick={this.handleClose} color="secondary">
              Search
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Clear
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SearchFilter.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

export default withStyles(styles)(SearchFilter);

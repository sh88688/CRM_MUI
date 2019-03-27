import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = {
  dialogTitle: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  dialogActions: {
    borderTop: "1px solid rgba(0, 0, 0, 0.12)"
  }
};

class SearchFilter extends React.Component {
  handleClickOpen = () => {
    this.props.onClose();
  };

  render() {
    const { classes, onClose, ...other } = this.props;

    return (
      <div>
        <Dialog
          {...other}
          onClose={this.handleClickOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle className={classes.dialogTitle} id="form-dialog-title">
            Filter
          </DialogTitle>
          <DialogContent>
            <br />
            <TextField
              autoFocus
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
            <Button onClick={this.handleClickOpen} color="secondary">
              Search
            </Button>
            <Button onClick={this.handleClickOpen} color="primary">
              Cancel
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

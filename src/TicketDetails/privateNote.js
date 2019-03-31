import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import NoteIcon from "@material-ui/icons/Note";
import FormRender from "../Components/FormRender";

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
    paddingLeft: "8px",
    marginBottom: "30px"
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

class TicketUpdate extends React.Component {
  state = {
    jsonForm: {
      private_note: {
        elementType: "textarea",
        elementConfig: {
          variant: "outlined",
          rows: 5,
          rowsMax: 6,
          margin: "dense",
          label: "Private Note *",
          InputLabelProps: {
            shrink: true
          },
          helperText: ""
        },
        value: "",
        validation: { required: true },
        valid: true
      }
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          container
          className={classes.container}
          justify="center"
          spacing={8}
        >
          <Grid item xs={11}>
            <Typography className={classes.heading} color="secondary">
              <NoteIcon color="primary" /> &nbsp; Private Note
            </Typography>
          </Grid>

          <Grid item xs={11}>
            <FormRender json={this.state.jsonForm} buttonText="Save" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

TicketUpdate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TicketUpdate);

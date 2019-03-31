import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TicketIcon from "@material-ui/icons/ConfirmationNumber";
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
      departments: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "crm",
              displayValue: "CRM"
            },
            {
              value: "sales",
              displayValue: "Sales"
            },
            {
              value: "support",
              displayValue: "Support"
            }
          ],
          configs: {
            variant: "outlined",
            margin: "dense",
            label: "Departments *",
            InputLabelProps: {
              shrink: true
            },
            helperText: "Select Department"
          }
        },
        value: "",
        validation: { required: true },
        valid: true
      },
      assign_to: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "vikas",
              displayValue: "Vikas"
            },
            {
              value: "rohit",
              displayValue: "Rohit"
            }
          ],
          configs: {
            variant: "outlined",
            margin: "dense",
            label: "Assign to *",
            InputLabelProps: {
              shrink: true
            },
            helperText: "Select User"
          }
        },
        value: "",
        validation: { required: true },
        valid: true
      },
      remarks: {
        elementType: "textarea",
        elementConfig: {
          variant: "outlined",
          rows: 3,
          rowsMax: 4,
          margin: "dense",
          label: "Remarks *",
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
              <TicketIcon color="primary" /> &nbsp; Ticket Assignment
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <FormRender json={this.state.jsonForm} buttonText="Assign Ticket" />
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

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DetailIcon from "@material-ui/icons/Update";
import FormRender from "./FormRender";
import DocketBar from "./Components/docketBar";
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

class TicketUpdate extends React.Component {
  state = {
    jsonForm: {
      disposition: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "payment",
              displayValue: "Payment"
            },
            {
              value: "returns",
              displayValue: "Returns"
            },
            {
              value: "tax deduction",
              displayValue: "Tax Deduction"
            }
          ],
          configs: {
            variant: "outlined",
            margin: "dense",
            label: "Disposition *",
            InputLabelProps: {
              shrink: true
            },
            helperText: "Select Disposition"
          }
        },
        value: "returns",
        validation: {},
        valid: true
      },
      sub_disposition: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "login issue",
              displayValue: "Login Issue"
            },
            {
              value: "gstr 2",
              displayValue: "GSTR 2"
            },
            {
              value: "gstr 3b",
              displayValue: "GSTR 3B"
            }
          ],
          configs: {
            variant: "outlined",
            margin: "dense",
            label: "Sub Disposition *",
            InputLabelProps: {
              shrink: true
            },
            helperText: "Select Sub disposition"
          }
        },
        value: "gstr 3b",
        validation: { required: true },
        valid: true
      },
      ticket_status: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "new",
              displayValue: "NEW"
            },
            {
              value: "closed",
              displayValue: "CLOSED"
            },
            {
              value: "inprogress",
              displayValue: "INPROGRESS"
            },
            {
              value: "awating customer response",
              displayValue: "AWAITING CUSTOMER RESPONSE"
            }
          ],
          configs: {
            variant: "outlined",
            margin: "dense",
            label: "Ticket Status *",
            InputLabelProps: {
              shrink: true
            },
            helperText: "Select Ticket Status"
          }
        },
        value: "new",
        validation: { required: true },
        valid: true
      },
      agent_remarks: {
        elementType: "textarea",
        elementConfig: {
          variant: "outlined",
          margin: "dense",
          rows: 2,
          rowsMax: 3,
          label: "Agent Remarks *",
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
        <DocketBar active="update" />
        <Grid
          container
          className={classes.container}
          justify="center"
          spacing={8}
        >
          <Grid item xs={11}>
            <Typography className={classes.heading} color="secondary">
              <DetailIcon color="primary" /> &nbsp; Ticket Updation
            </Typography>
          </Grid>
          <br /> <br />
          <Grid item xs={11}>
            <FormRender json={this.state.jsonForm} buttonText="Update Ticket" />
          </Grid>
        </Grid>
        <br />
        <br />
      </div>
    );
  }
}

TicketUpdate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TicketUpdate);

import React from "react";
import DocketBar from "./Components/docketBar";
import Detail from "./TicketDetails/Detail";
import TicketUpdate from "./TicketDetails/update";
import TicketAssign from "./TicketDetails/TicketAssign";
import PrivateNote from "./TicketDetails/privateNote";
import Timeline from "./TicketDetails/Timeline";

class TicketView extends React.Component {
  constructor(props) {
    super(props);
    const urlParams = this.props.location.state;
    console.log(urlParams);
    this.state = {
      value: 0,
      docket: urlParams.docket_no,
      customer: urlParams.customer_name
    };
  }

  handleChange = selectedValue => {
    console.log("change value", selectedValue);
    this.setState({ value: selectedValue });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <DocketBar onSelect={this.handleChange} />
        {value === 0 && (
          <Detail docket={this.state.docket} customer={this.state.customer} />
        )}
        {value === 1 && <TicketUpdate />}
        {value === 2 && <TicketAssign />}
        {value === 3 && <PrivateNote />}
        {value === 4 && <Timeline />}
      </div>
    );
  }
}

export default TicketView;

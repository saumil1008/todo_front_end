import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";

let style = {
  margin: "8px"
};

class Task extends React.Component {
  render() {
    return (
      <div className="row" style={style}>
        <div className="col-lg-6">
          <h4>{this.props.task}</h4>
        </div>
        <div className="col-lg-6">
          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteTask(this.props.task)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTask: actions.deleteTask }, dispatch);
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(Task);

import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { bindActionCreators } from "../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/redux";

class TaskBar extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Add todos..."
                ref="task"
              />
              <br />
              {/* <input type="date" class="form-control" ref="taskdesc" />
              <br /> */}
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.addTask(this.refs.task.value);
                }}
                type="button"
              >
                ADD!
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addTask: actions.addTask
    },
    dispatch
  );
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(TaskBar);

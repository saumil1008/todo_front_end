import React from "react";
import { connect } from "react-redux";
import Task from "../task";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <div className="row text-info">
          <div className="col-lg-6">
            <h3>Tasks</h3>
          </div>
          <div className="col-lg-6">
            <h3>Actions</h3>
          </div>
        </div>
        <br />
        {this.props.tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state);
  return {
    tasks: state.task
  };
}
export default connect(mapStateToProps)(TaskList);

import { combineReducers } from "redux";

const taskReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TASK":
        state = state.concat(action.payload);
        break;

      case "DELETE_TASK":
        state = state.slice();
        let index = state.indexOf(action.payload);
        state.splice(index, 1);
        break;

      default:
        break;
    }

    return state;
  },
  reducers = combineReducers({
    task: taskReducer
  });

export default reducers;

const initialState = [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return action.payload;

    case "ADD_TASK":
      return [...state, action.payload];

    case "EDIT_TASK":
      return state.map((task) => {
        if (task.id === action.payload.taskId) {
          return { ...task, ...action.payload.updatedTaskData };
        }
        return task;
      });

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "UPDATE_TASK_STATUS":
      return state.map((task) => {
        if (task.id === action.payload.taskId) {
          return { ...task, Status: action.payload.newStatus };
        }
        return task;
      });
    default:
      return state;
  }
};

export default tasksReducer;

import axios from "axios";

export const fetchingData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      dispatch({
        type: "FETCHING_DATA",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const addTask = (newTask) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/tasks", newTask);
      dispatch({
        type: "ADD_TASK",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };
};

export const editdTask = (taskId, updatedTaskData) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3000/tasks/${taskId}`, updatedTaskData)
      .then((response) => {
        console.log(response);
        debugger;
        if (response.status) {
          dispatch({
            type: "EDIT_TASK",
            payload: { taskId, updatedTaskData: response.data },
          });
        }
      })
      .catch((error) => {
        debugger;
        console.error("Error updating task: ", error);
      });
  };
};

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${taskId}`);
      dispatch({
        type: "DELETE_TASK",
        payload: taskId,
      });
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };
};

export const updateTaskStatus = (taskId, newStatus) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:3000/tasks/${taskId}`, {
        Status: newStatus,
      })
      .then((response) => {
        dispatch({
          type: "UPDATE_TASK_STATUS",
          payload: { taskId, newStatus },
        });
        console.log("Status updated on the server.", response);
      })
      .catch((error) => {
        console.error("Error updating status on the server:", error);
      });
  };
};

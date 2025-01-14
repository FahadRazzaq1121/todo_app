import React from "react";
import "./Addtaskpopup.css";
import CloseIcon from "@mui/icons-material/Close";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/actions/taskActions";

const Addtaskpopup = ({ setModel, field, setField }) => {
  const dispatch = useDispatch();
  const handleNewField = () => {
    if (
      field.Task.trim() === "" ||
      field.priority === "" ||
      field.SelectDate === ""
    ) {
      return;
    }
    const newTask = {
      ...field,
      Status: "To-do",
      TimeLeft: {
        datePart: "",
        timePart: "",
      },
    };
    dispatch(addTask(newTask));
    setField({
      Task: "",
      priority: "Low",
      SelectDate: "",
    });

    setModel(false);
  };

  return (
    <div className="add-task-pop-up-main-section">
      <div className="addtask-container">
        <div className="content-box">
          {/* Add Task PopUp Top text and Cross icon */}
          <div className="text-and-cross-icon">
            <p className="add-task-left-text">Add Task</p>
            <CloseIcon className="cross-icon" onClick={() => setModel(false)} />
          </div>
          {/* Input Fields Add task and Time */}
          <div className="add-task-pop-up-form">
            <div className="task-input-field">
              <label>Task</label>
              <input
                type="text"
                placeholder="Enter your task"
                value={field.Task}
                onChange={(e) => {
                  setField((prev) => ({ ...prev, Task: e.target.value }));
                }}
              />
            </div>
            <div className="task-input-field">
              <label>Time Left</label>
              <input
                type="datetime-local"
                value={field.SelectDate}
                onChange={(e) => {
                  setField((prev) => ({ ...prev, SelectDate: e.target.value }));
                }}
              />
            </div>
          </div>
          {/* Select the priority buttons */}
          <div className="priorit-btns">
            <p>Priority</p>
            <button
              value="High"
              className="high"
              onClick={(e) => {
                setField((prev) => ({ ...prev, priority: e.target.value }));
              }}
              style={{
                backgroundColor: field.priority === "High" ? "red" : "white",
                color: field.priority === "High" ? "white" : "red",
              }}
            >
              High
            </button>
            <button
              value="Medium"
              className="medium"
              onClick={(e) => {
                setField((prev) => ({ ...prev, priority: e.target.value }));
              }}
              style={{
                backgroundColor:
                  field.priority === "Medium" ? "#ffd621" : "white",
                color: field.priority === "Medium" ? "white" : "#ffd621",
              }}
            >
              Medium
            </button>
            <button
              value="Low"
              className="low"
              onClick={(e) => {
                setField((prev) => ({ ...prev, priority: e.target.value }));
              }}
              style={{
                backgroundColor: field.priority === "Low" ? "#0ac947" : "white",
                color: field.priority === "Low" ? "white" : "#0ac947",
              }}
            >
              Low
            </button>
          </div>
          {/* Edit Button */}
          <div className="add-task-btn">
            <button
              onClick={() => handleNewField()}
              style={{
                backgroundColor: field.Task ? "purple" : "gray",
                color: "white",
                cursor: field.Task ? "pointer" : "not-allowed",
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtaskpopup;

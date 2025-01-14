import React, { useState } from "react";
import "./Editmodel.css";
import CloseIcon from "@mui/icons-material/Close";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { editdTask } from "../Redux/actions/taskActions";

const Editmodel = ({
  setEditModel,
  task,
  priority,
  fieldIndex,
  data,
  setData,
  SelectDate,
}) => {
  const [editTask, setEditTask] = useState(task);
  const [editPriority, setEditPriority] = useState(priority);
  const [editTime, setEditTime] = useState(SelectDate);
  const dispatch = useDispatch();
  const handleEditField = () => {
    const updatedField = [...data];
    updatedField[fieldIndex].Task = editTask;
    updatedField[fieldIndex].priority = editPriority;
    updatedField[fieldIndex].SelectDate = editTime;

    dispatch(editdTask(updatedField[fieldIndex]?.id, updatedField[fieldIndex]));
    setEditModel(false);
  };
  return (
    <div>
      <div className="edit-task-pop-up-main-section">
        <div className="editTask-container">
          <div className="edit-content-box">
            {/* Edit Task PopUp Top text and Cross icon */}
            <div className="edit-and-cross-icon">
              <p className="edit-task-left-text">Edit Task</p>
              <CloseIcon
                className="cross-icon"
                onClick={() => setEditModel(false)}
              />
            </div>
            {/* Input Fields Edit and Time */}
            <div className="edit-task-pop-up-form">
              <div className="edit-input-field">
                <label>Task</label>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
              </div>
              <div className="edit-input-field">
                <label>Time Left</label>
                <input
                  type="datetime-local"
                  value={editTime}
                  onChange={(e) => setEditTime(e.target.value)}
                />
              </div>
            </div>
            {/* Edit the priority buttons */}
            <div className="edit-priorit-btns">
              <p>Priority</p>
              <button
                className="high"
                onClick={() => setEditPriority("High")}
                style={{
                  backgroundColor:
                    editPriority === "High" ? "red" : "transparent",
                  color: editPriority === "High" ? "white" : "red",
                }}
              >
                High
              </button>
              <button
                className="medium"
                onClick={() => setEditPriority("Medium")}
                style={{
                  backgroundColor:
                    editPriority === "Medium" ? "#ffd621" : "transparent",
                  color: editPriority === "Medium" ? "white" : "#ffd621",
                }}
              >
                Medium
              </button>
              <button
                className="low"
                onClick={() => setEditPriority("Low")}
                style={{
                  backgroundColor:
                    editPriority === "Low" ? "#0ac947" : "transparent",
                  color: editPriority === "Low" ? "white" : "#0ac947",
                }}
              >
                Low
              </button>
            </div>
            {/* Edit Button */}
            <div className="edit-task-btn">
              <button onClick={() => handleEditField()}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editmodel;

import React from "react";
import "./DeleteField.css";
const DeleteField = ({ setDeleteModel, handelRemoveField }) => {
  const handleConfirmation = (delet) => {
    delet && handelRemoveField();
    setDeleteModel(false);
  };
  return (
    <div>
      <div className="delete-field-main-section">
        <div className="delete-container">
          <div className="delete-content-box">
            <div className="delete-confirmation-text">
              <h3>Are you sure you want to delete this task?</h3>
            </div>
            <div className="delete-confirmation-buttons">
              <button
                className="confirm-Delete_button"
                onClick={() => handleConfirmation(true)}
              >
                Delete
              </button>
              <button
                className="confirm-cancel_button"
                onClick={() => handleConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteField;

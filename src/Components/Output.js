import React, { useState } from "react";
import "./Output.css";
import Editmodel from "./Editmodel";
import DeleteField from "./DeleteField";
import { useDispatch } from "react-redux";
import { deleteTask, updateTaskStatus } from "../Redux/actions/taskActions";
import Record from "./Record";

const Output = ({ data, setData }) => {
  const [editModel, setEditModel] = useState(false);
  const [deletemodel, setDeleteModel] = useState(false);
  const [fieldIndex, setFieldIndex] = useState(null);
  const [searchItems, setSearchItems] = useState("");

  // Removing Field
  const dispatch = useDispatch();

  const handelRemoveField = (index) => {
    const taskId = data[index].id;
    dispatch(deleteTask(taskId));
  };
  // Status Button
  const handleButtonStatus = (index) => {
    const updatedFields = [...data];
    const currentStatus = updatedFields[index].Status;
    let newStatus = "";

    if (currentStatus === "To-do") {
      newStatus = "Progress";
    } else if (currentStatus === "Progress") {
      newStatus = "Done";
    } else {
      newStatus = "To-do";
    }
    updatedFields[index].Status = newStatus;
    dispatch(updateTaskStatus(updatedFields[index].id, newStatus));
  };
  const getFillPercentage = (Status) => {
    if (Status === "To-do") return 0;
    if (Status === "Progress") return 50;
    if (Status === "Done") return 100;
    return 0;
  };

  // Filtering The task
  const filterData = () => {
    return !searchItems
      ? data
      : data.filter((item) => {
          if (item.Task !== undefined) {
            const searchLowerCase = searchItems.toLowerCase();
            const taskLowerCase = item.Task.toLowerCase();
            return taskLowerCase.includes(searchLowerCase);
          }
          return false;
        });
  };

  // Rndering data.
  return (
    <div>
      <div className="output-main-section">
        {/* Filter Task */}
        {data.length >= 0 ? (
          <div className="filter-input">
            <div className="inputfiled">
              <input
                type="text"
                placeholder="Search Your Task..."
                value={searchItems}
                onChange={(e) => setSearchItems(e.target.value)}
              />
            </div>
          </div>
        ) : (
          setSearchItems("Data Not available")
        )}

        {/* Rendering data */}
        {filterData().length > 0 &&
          filterData().map((value, index) => {
            return (
              <Record
                key={value.id} // Use the unique ID as the key
                value={value}
                index={index}
                handleButtonStatus={handleButtonStatus}
                getFillPercentage={getFillPercentage}
                setEditModel={setEditModel}
                fieldIndex={fieldIndex}
                setFieldIndex={setFieldIndex}
                setDeleteModel={setDeleteModel}
              />
            );
          })}
      </div>
      {/* Edit PopUP */}
      {editModel && (
        <Editmodel
          setEditModel={setEditModel}
          task={data[fieldIndex]?.Task}
          priority={data[fieldIndex]?.priority}
          SelectDate={data[fieldIndex]?.SelectDate}
          fieldIndex={fieldIndex}
          data={data}
          setData={setData}
        />
      )}
      {/* Delete Model */}
      {deletemodel && (
        <DeleteField
          setDeleteModel={setDeleteModel}
          handelRemoveField={() => handelRemoveField(fieldIndex)}
        />
      )}
    </div>
  );
};

export default Output;

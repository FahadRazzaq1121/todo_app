import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Output from "./Components/Output";
// import moment from "moment";
import { NewtonsCradle } from "@uiball/loaders";
import { useDispatch, useSelector } from "react-redux";
import { fetchingData } from "./Redux/actions/taskActions";
// import { DotSpinner } from "@uiball/loaders";

const App = () => {
  const state = useSelector((state) => state?.task);
  console.log(state);
  const dispatch = useDispatch();
  const [field, setField] = useState({
    Task: "",
    Status: "To-do",
    priority: "Low",
    SelectDate: "",
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchingData());
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  return (
    <div className="app">
      <div className="container">
        <Navbar
          field={field}
          setField={setField}
          data={data}
          setData={setData}
        />
        {loading ? (
          <div className="loader-container">
            <h2 className="welcome-greeting">Welcome to your TO-DO App</h2>
            <NewtonsCradle size={80} speed={1.4} color="#713fff" />
          </div>
        ) : (
          <Output data={state} setData={setData} />
        )}
      </div>
    </div>
  );
};

export default App;

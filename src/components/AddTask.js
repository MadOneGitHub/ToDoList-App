import { useState } from "react";
import "./AddTask.css";
const AddTask = ({ onAdd }) => {
  const [tasks, setTasks] = useState("");
  const submitForm = (event) => {
    event.preventDefault();

    onAdd({ tasks });

    setTasks("");
  };
  return (
    <form className="form" onSubmit={submitForm}>
      <label htmlFor="input" className="label"></label>
      <div className="AddTask">
        <input
          type="text"
          id="input"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
          placeholder="add a new Task"
        ></input>
        <button type="submit" className="sub-btn">
          ADD
        </button>
      </div>
    </form>
  );
};
export default AddTask;

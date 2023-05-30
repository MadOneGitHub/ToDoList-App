import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:8000/tasks");

      const responseData = await response.json();

      setTasks(responseData);
    };
    sendRequest();
  }, []);

  const addHandler = async (todo) => {
    const response = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const responseData = await response.json();
    setTasks([...tasks, responseData]);
  };
  const editHandler = () => {
    console.log(`edit ${tasks.todo}`);
  };
  const deleteHandler = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((item) => item.id !== id));
  };
  return (
    <div id="app" className="container">
      <label>
        <h1>TO DO LIST</h1>
      </label>
      <h3>Add / Edit / Delete Tasks</h3>
      <AddTask onAdd={addHandler} tasks={tasks} />
      <TasksList tasks={tasks} onEdit={editHandler} onDelete={deleteHandler} />
    </div>
  );
};
export default App;

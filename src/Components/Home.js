import React from "react";
import "./Home.css";
import { AppContext } from "./useContext";
import { useContext, useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const ctx = useContext(AppContext);

  const addTodoHandler = (e) => {
    e.preventDefault();
    setTask(task);
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: task,
      checked: false
    };
    console.log(task,item);
    ctx.setTasks((prevTask) => {
      return [...prevTask, item];
    });
    setTask("");
  };

  const handleTodoInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <>
      <section className="border">
        <div className="mb-3">
          <label htmlFor="todo" className="form-label mt-3">
            Enter your task here 😀
          </label>
          <input
            type="text"
            name="task"
            value={task}
            className="form-control"
            id="todo"
            onChange={handleTodoInputChange}
          />

          <button className="btn btn-primary mt-3" onClick={addTodoHandler}>
            Add todo
          </button>
        </div>
      </section>
      <br />
    </>
  );
};

export default Home;

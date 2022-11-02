import React, { useContext } from "react";
import { AppContext } from "./useContext";
import "./TodoList.css";

const TodoList = () => {
  const ctx = useContext(AppContext);

  const chekedHandler = (e, taskItem) => {
    console.log(taskItem,"taskItem")
    let arr= ctx.tasks.map((item) => {
      return taskItem.id===item.id?{...item,checked:e.target.checked}:item;
    });
    console.log(arr,"arr");
    let checkedArr=arr.filter((t)=>{
      return t.checked && t;
    })
    let uncheckedArr=arr.filter((t)=>{
      return !t.checked && t;
    })
    arr=[...checkedArr,...uncheckedArr];
    ctx.setTasks(arr);
    
  };
  

  return (
    <>
      {ctx.tasks.map((taskItem) => {
        return (
          <div key={taskItem.id}>
            <section className="border">
              <div className="row">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={taskItem.checked}
                    onChange={(e) => chekedHandler(e, taskItem)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {taskItem.value}
                  </label>
                </div>
              </div>
            </section>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default TodoList;

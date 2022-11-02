import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

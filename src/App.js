import "./App.css";
import Home from "./Components/Home";
import TodoList from "./Components/TodoList";

function App() {

  return (
    <>
      <div className="container">
        <h3>Todo's List</h3>

        <Home />
        <TodoList />
      </div>
    </>
  );
}

export default App;

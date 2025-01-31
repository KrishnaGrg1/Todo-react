import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/createTodo.jsx";
import { Todos } from "./components/Todos.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:9000/todos").then(async (res) => {
    const json = await res.json();
    setTodos(json.todos);
  });
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;

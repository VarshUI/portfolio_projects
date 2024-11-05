import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodos";
import { Todos } from "./components/Todos";
function App() {
  const [todos, setTodos] = useState([]); //useState hook  s
  fetch("https://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos></Todos>
    </div>
  );
}

export default App;

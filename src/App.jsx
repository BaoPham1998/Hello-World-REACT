import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg"
import { useState } from "react";


const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: `Learning React` },
    { id: 2, name: `Watching Youtube` }
  ])
  const hoidanit = "Bao Pham";
  const age = "25";
  const data = {
    address: "HCM",
    country: "Japan",
  }

  const addTodo = (name) => {
    const newTodoList = {
      id: handleId(1, 10000),
      name: name,
    };
    setTodoList([...todoList, newTodoList])
  }
  const handleId = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addTodo={addTodo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        information={data}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  )
}

export default App

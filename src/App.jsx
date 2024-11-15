import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg"
import { useState } from "react";
import Header from './components/layout/header';
import "./components/layout/footer.css";
import "./components/layout/header.css";
import Footer from './components/layout/footer';



const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: `Learning React` },
    // { id: 2, name: `Watching Youtube` }
  ])

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
  const handleDeleteId = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id)
    setTodoList(newTodoList)
  }


  return (

    <div className="todo-container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Header />
      <div className="todo-title">Todo List</div>
      <TodoNew
        addTodo={addTodo}
      />
      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          handleDeleteId={handleDeleteId}
        />
        :
        <div div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>}
      <Footer />
    </div>
  )
}

export default App

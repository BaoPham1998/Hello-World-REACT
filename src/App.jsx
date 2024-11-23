import "./components/todo/todo.css";
import Header from './components/layout/header';
import "./components/layout/footer.css";
import Footer from './components/layout/footer';
import { Outlet } from "react-router-dom";



const App = () => {
  return (
    <div className="todo-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPages from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import UsersPage from './pages/users.jsx'
import ProductPage from './pages/product.jsx'
import './styles/global.css'
import TodoApp from './components/todo/TodoApp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/users",
        element: <UsersPage />
      },
      {
        path: "/product",
        element: <ProductPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPages />
  },

  {
    path: "/register",
    element: <RegisterPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

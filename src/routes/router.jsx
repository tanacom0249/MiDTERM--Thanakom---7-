import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage ";
import TodolistPage from "../pages/TodolistPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/todolist",
        element: <TodolistPage />,
      },
    ],
  },
]);

export default router;

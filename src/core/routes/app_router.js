import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/HomeView";
import LoginView from "../../features/login/views/LoginView";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: HomeView,
  },
  {
    path: "/login",
    Component: LoginView,
  },
]);

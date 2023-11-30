import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/HomeView";
import LoginView from "../../features/login/views/LoginView";
import PrivateRoute from "../auth/components/private_route";
import PublicRoute from "../auth/components/public_route";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeView />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginView />
      </PublicRoute>
    ),
  },
  //Manejar error 404
  {
    path: "*",
    element: <div>No se encontro la página</div>,
  },
]);

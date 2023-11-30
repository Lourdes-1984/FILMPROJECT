import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/HomeView";
import LoginView from "../../features/login/views/LoginView";
import PirvateRoute from "../auth/components/private_route";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PirvateRoute>
        <HomeView />
      </PirvateRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginView />,
  },
]);

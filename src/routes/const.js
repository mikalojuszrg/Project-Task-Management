import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Tasks from "../pages/Tasks/Tasks";

export const HOME_PATH = "/";
export const TASKS_PATH = "/tasks";
export const REGISTER_PATH = "register";

export const MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_PATH,
      Component: Home,
    },
    {
      path: TASKS_PATH,
      Component: Tasks,
    },
    {
      path: REGISTER_PATH,
      Component: Register,
    },
  ],
};

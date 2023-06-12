import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import StudentDashboard from "../pages/Dashboard/Student/StudentDashboard";
import Dashboard from "../layouts/Dashboard";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      //admin dashboard
      {
        path: "manageUsers",
        element: <AdminRoute><ManageUsers /></AdminRoute>,
      },
      {
        path: "addAClass",
        element: <InstructorRoute><AddAClass /></InstructorRoute>,
      },
      // student routes
      {
        path: "studentHome",
        element: <StudentDashboard />,
      },
    ],
  },
]);

export default router;

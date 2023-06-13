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
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import AllClasses from "../pages/AllClasses/AllClasses";
import NotFound from "../pages/NotFound/NotFound";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
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
      {
        path: "classes",
        element: <AllClasses />,
      },
      {
        path: "instructors",
        element: <AllInstructors />,
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
        path: "manageClasses",
        element: <AdminRoute><ManageClasses /></AdminRoute>,
      },
      // instructor routes
      {
        path: "addAClass",
        element: <InstructorRoute><AddAClass /></InstructorRoute>,
      },
      {
        path: "myClasses",
        element: <InstructorRoute><MyClasses /></InstructorRoute>,
      },
      // student routes
      {
        path: "studentHome",
        element: <StudentDashboard />,
      },
      {
        path: "selectedClasses",
        element: <MySelectedClasses />,
      },
    ],
  },
]);

export default router;

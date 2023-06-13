import { Outlet } from "react-router-dom";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import InstructorDashboard from "../pages/Dashboard/Instructor/InstructorDashboard";
import StudentDashboard from "../pages/Dashboard/Student/StudentDashboard";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import Spinner from "../pages/Shared/Spinner";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin()
  const [isInstructor, isInstructorLoading] = useInstructor()

  if(isAdminLoading || isInstructorLoading){
    return <Spinner />
  }

  return (
    <div className="relative min-h-screen md:flex">
      {isAdmin ? (
        <AdminDashboard />
      ) : isInstructor ? (
        <InstructorDashboard />
      ) : (
        <StudentDashboard />
      )}
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

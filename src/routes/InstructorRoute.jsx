import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import Spinner from "../pages/Shared/Spinner";
import useAuth from "../hooks/useAuth";

const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    const [isInstructor, isInstructorLoading] = useInstructor()
    if(loading || isInstructorLoading){
        return <Spinner />
    }
    if(user && isInstructor){
        return children
    }
    return  <Navigate to ='/' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;
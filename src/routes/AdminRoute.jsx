import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../pages/Shared/Spinner";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin()
    if(loading || isAdminLoading){
        return <Spinner />
    }
    if(user && isAdmin){
        return children
    }
    return  <Navigate to ='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;
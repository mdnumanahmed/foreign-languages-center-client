import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../Shared/Spinner";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
    console.log(user.email)
  const { data: allClasses = [] } = useQuery(["class"], async () => {
    const res = await axiosSecure.get(`/class/${user?.email}`);
    return res.data;
  });
  
  const handleMakeAdmin = () => {

  }

  if(loading){
    return <Spinner />
  }


  console.log(allClasses);
  return (
    <>
    <Helmet>
        <title>FLC | My Classes</title>
      </Helmet>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {/* head */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">#</th>
            <th scope="col" className="px-6 py-3">Image</th>
            <th scope="col" className="px-6 py-3">Class Name</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Seats</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {allClasses.map((classes, index) => (
            <tr key={classes._id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th>{index + 1}</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={classes.image} alt="img" />
                  </div>
                </div>
              </td>
              <td>{classes.name}</td>
              <td>{classes.price}</td>
              <td>{classes.seats}</td>
              <td>{classes.status}</td>
              <td> 
       
              {
                classes.status === 'pending'  ? <button onClick={()=>handleMakeAdmin(user)} className={`btn btn-ghost bg-purple-600 hover:bg-purple-600 text-white   `}> Feedback </button> :
                 ""
              }
           
          
          </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default MyClasses;

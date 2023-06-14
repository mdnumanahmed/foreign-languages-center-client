
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Spinner from "../../../Shared/Spinner";

const ManageClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: allClasses = [] } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });
  //   console.log(allClasses);

  const handleMakeApprove = (classes) => {
    // console.log(classes)
    fetch(`https://foreign-languages-center.web.app/class/approve/${classes._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${classes.name} is an Approve By Admin!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeDeny = (classes) => {
    // console.log(classes)
    fetch(`https://foreign-languages-center.web.app/class/deny/${classes._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${classes.name} is an  Deny By Admin!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeAdmin = () => {};

  if(loading){
    return <Spinner />
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Helmet>
        <title>FLC | Manage Classes</title>
      </Helmet>
      <h3 className="text-3xl font-semibold text-center mb-4">
        Total Classes:{allClasses.length}
      </h3>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {/* head */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">#</th>
            <th scope="col" className="px-6 py-3">Image</th>
            <th scope="col" className="px-6 py-3">Class Name</th>
            <th scope="col" className="px-6 py-3">Instructor Name</th>
            <th scope="col" className="px-6 py-3">Instructor Email</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Seats</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Status</th>
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
                  <div className="w-24 p-4">
                    <img src={classes.image} alt="img" />
                  </div>
                </div>
              </td>
              <td className="font-bold">{classes.name}</td>
              <td>{classes.instructorName}</td>
              <td>{classes.instructorEmail}</td>
              <td>{classes.price}</td>
              <td>{classes.seats}</td>
              <td>
                {classes.status === "pending"
                  ? "pending"
                  : classes.status === "approve"
                  ? "approve"
                  : classes.status === "deny"
                  ? " deny"
                  : ""}
              </td>
              <td>
                {classes.status === "approve" || classes.status === "deny" ? (
                  <button
                    onClick={() => handleMakeApprove(classes)}
                    className={`text-white bg-gradient-to-r from-green-200 via-green-300 to-green-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-not-allowed `}
                  >
                    {" "}
                    Approve{" "}
                  </button>
                ) : (
                  <button
                    onClick={() => handleMakeApprove(classes)}
                    className={`text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                  >
                    {" "}
                    Approve{" "}
                  </button>
                )}
              </td>

              <td>
                {classes.status === "deny" || classes.status === "approve" ? (
                  <button
                    onClick={() => handleMakeDeny(classes)}
                    className={`text-white bg-gradient-to-r from-red-200 via-red-300 to-red-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-not-allowed `}
                  >
                    {" "}
                    Deny{" "}
                  </button>
                ) : (
                  <button
                    onClick={() => handleMakeDeny(classes)}
                    className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                  >
                    Deny{" "}
                  </button>
                )}
              </td>
              <td>
                {classes.status === "deny" ? (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className={`btn btn-ghost bg-purple-600 hover:bg-purple-600 text-white   `}
                  >
                    {" "}
                    Feedback{" "}
                  </button>
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className={`btn btn-ghost bg-purple-600 hover:bg-purple-600 text-white  opacity-50 cursor-not-allowed`}
                  >
                    {" "}
                    Feedback{" "}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;

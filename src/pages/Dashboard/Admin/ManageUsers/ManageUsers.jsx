import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  //   const [adminDisabled, setAdminDisabled] = useState(true)
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    console.log(res);
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    console.log(user);
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>FLC | Manage Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold text-center mb-4">
        Total Users:{users.length}
      </h3>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {/* head */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin"
                    ? "admin"
                    : user.role === "instructor"
                    ? "instructor"
                    : "student"}
                </td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className={`btn btn-ghost bg-purple-600 hover:bg-purple-600 text-white  opacity-50 cursor-not-allowed `}
                    >
                      {" "}
                      Make Admin{" "}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className={`btn  btn-ghost bg-purple-500 hover:bg-purple-600 text-white  `}
                    >
                      {" "}
                      Make Admin{" "}
                    </button>
                  )}
                </td>

                <td>
                  {user.role === "admin" || user.role === "instructor" ? (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className={`btn btn-ghost bg-purple-500 hover:bg-purple-600 text-white   opacity-50 cursor-not-allowed`}
                    >
                      {" "}
                      Make Instructor{" "}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className={`btn btn-ghost bg-purple-500 hover:bg-purple-600 text-white  `}
                    >
                      {" "}
                      Make Instructor{" "}
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-purple-500 hover:bg-purple-600 text-white  "
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Spinner from "../../../Shared/Spinner";
import { Helmet } from "react-helmet-async";

const MySelectedClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClasses = [] } = useQuery(["class"], async () => {
    const res = await axiosSecure.get(`/savedClass/${user?.email}`);
    return res.data;
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>FLC | Selected Class</title>
      </Helmet>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {/* head */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Class Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Seats
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Pay
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((classes, index) => (
              <tr
                key={classes._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 p-4">
                      <img src={classes.image} alt="img" />
                    </div>
                  </div>
                </td>
                <td className="text-md font-bold">{classes.name}</td>
                <td>{classes.price}</td>
                <td>{classes.seats}</td>
                <td>{classes.paymentStatus}</td>
                <td>
                  <Link to={`/dashboard/payment/${classes._id}`}>
                    <button
                      className={`text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                    >
                      {" "}
                      Pay{" "}
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySelectedClasses;

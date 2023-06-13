import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MyEnrolledClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrollClasses = [] } = useQuery(["enrollClass"], async () => {
    const res = await axiosSecure.get(`/payment/${user?.email}`);
    return res.data;
  });
  return (
    <div>
      <h2 className="text-xl text-center font-semibold text-purple-500">
        Total Enrolled Class: {enrollClasses.length}
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {/* head */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">#</th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Class Name</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {enrollClasses.map((classes, index) => (
              <tr key={classes._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th className="pl-4">{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={classes.image} alt="img" />
                    </div>
                  </div>
                </td>
                <td className="text-md font-bold">{classes.name}</td>
                <td>{classes.price}</td>
                <td>{classes.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClass;

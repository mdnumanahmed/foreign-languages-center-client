import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrollClasses = [] } = useQuery(["enrollClass"], async () => {
    const res = await axiosSecure.get(`/history/${user?.email}`);
    return res.data;
  });
  return (
    <div>
      <Helmet>
        <title>FLC | Payment History</title>
      </Helmet>
      <h2 className="text-xl text-center font-semibold text-purple-500">
        Successfully Payment for: {enrollClasses.length} Class
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {/* head */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">#</th>
              <th scope="col" className="px-6 py-3">User Email</th>
              <th scope="col" className="px-6 py-3">Transaction Id</th>
              <th scope="col" className="px-6 py-3">Payment Status</th>
              <th scope="col" className="px-6 py-3">Time</th>
            </tr>
          </thead>
          <tbody className=" text-black">
            {enrollClasses.map((classes, index) => (
              <tr key={classes._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th className="pl-3">{index + 1}</th>
                <td>{classes.studentEmail}</td>
                <td>{classes.transactionId}</td>
                <td>{classes.paymentStatus}</td>
                <td>{classes.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

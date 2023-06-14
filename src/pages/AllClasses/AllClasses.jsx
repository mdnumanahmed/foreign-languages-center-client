import { useQuery } from "@tanstack/react-query";
import ClassesCart from "./ClassesCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: allClasses = [] } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/approvedClass");
    return res.data;
  });
  console.log(allClasses);

  return (
    <>
      <Helmet>
        <title>FLC | All Classes</title>
      </Helmet>
      <div className="mt-10 p-10 md:p-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-20">
        {allClasses.map((classes) => (
          <ClassesCart key={classes._id} classes={classes}></ClassesCart>
        ))}
      </div>
    </>
  );
};

export default AllClasses;

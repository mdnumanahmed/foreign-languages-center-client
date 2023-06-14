import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SingleInstructor from "./SingleInstructor";
import { Helmet } from "react-helmet-async";

const AllInstructors = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: allInstructor = [] } = useQuery(["allInstructor"], async () => {
    const res = await axiosSecure.get("/instructor");
    return res.data;
  });
  console.log(allInstructor);
  return (
    <>
      <Helmet>
        <title>FLC | All Instructors</title>
      </Helmet>
      <div className="mt-10 p-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-32">
        {allInstructor.map((instructor) => (
          <SingleInstructor
            key={instructor._id}
            instructor={instructor}
          ></SingleInstructor>
        ))}
      </div>
    </>
  );
};

export default AllInstructors;

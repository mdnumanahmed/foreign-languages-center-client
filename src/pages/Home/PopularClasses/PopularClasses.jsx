import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SingleClass from "./SingleClass";
import { Zoom } from "react-awesome-reveal";

const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: topClasses = [] } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/topClass");
    return res.data;
  });
  return (
    <section className="container mx-auto py-8 lg:py-20">
      <div className="section-header text-center">
        <p className="font-bold mb-3">Choose your favorite class</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff007a] mb-7">
          Our Popular Classes
        </h2>
      </div>
      {/* <Zoom> */}
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-20 lg:gap-14 mb-20">
        {topClasses.slice(0, 6).map((top) => (
          <SingleClass key={top._id} top={top}></SingleClass>
        ))}
      </div>
      {/* </Zoom> */}
    </section>
  );
};

export default PopularClasses;

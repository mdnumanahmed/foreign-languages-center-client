import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const SingleProgram = ({program}) => {
  return (
    <Slide direction='down'>
    <Link
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={program.image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {program.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {program.desc}
        </p>
      </div>
    </Link>
    </Slide>
  );
};

export default SingleProgram;

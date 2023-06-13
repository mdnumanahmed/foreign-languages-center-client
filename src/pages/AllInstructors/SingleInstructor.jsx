import { Link } from "react-router-dom";

const SingleInstructor = ({ instructor }) => {
  const { name, userImg, email } = instructor;
  console.log(instructor.userImg);
  return (
    <>
      <div className=" card w-96 bg-base-100 pb-7 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={userImg} alt="Instructor" className="rounded-xl h-56 w-80" />
        </figure>
        <div className="card-body items-center text-center mt-4 space-y-3">
          <h2 className="font-bold text-xl">{name}</h2>
          <h2 className="font-semibold">Email : {email}</h2>

          <div className="card-actions">
            <Link to="">
              <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                See Classes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleInstructor;

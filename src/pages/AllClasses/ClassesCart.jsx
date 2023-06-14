import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { Fade } from "react-awesome-reveal";

const ClassesCart = ({ classes }) => {
  const { user } = useAuth();
  const [selected, setSelected] = useState(true);
  const [axiosSecure, refetch] = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { name, image, instructorName, seats, price } = classes;
  const className = seats < 1 ? "bg-red-500" : "bg-slate-100";

  const selectClass = (classes) => {
    let availableSeats = seats - 1;
    const paymentStatus = "unpaid";
    const addedSelectedValue = {
      studentName: user?.displayName,
      studentEmail: user?.email,
      name,
      image,
      instructorName,
      seats: availableSeats,
      price,
      paymentStatus,
    };

    axiosSecure.post("/savedClass", addedSelectedValue).then((data) => {
      console.log("After posting new Class", data.data);

      if (data.data.acknowledged === true) {
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Selected Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        fetch(`http://localhost:5000/class/${classes._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              refetch();
              console.log(`${classes.seats} is decrease`);
            }
          });
      } else {
        toast.error(
          `${classes.name} Is Already Selected By ${user?.displayName}`
        );
      }
    });

    // setSelected(false)
  };

  return (
    <Fade>
    <div>
      <div className={`card w-96 shadow-xl ${className} pb-7`}>
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl w-96 h-40" />
        </figure>
        <div className="card-body items-center text-center mt-5 space-y-4">
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="">Instructor : {instructorName}</p>
          <p>Available Seats: {seats}</p>
          <p>Price: {price}</p>
          <div className="card-actions">
            {seats < 1 || isAdmin || isInstructor ? (
              <button className="text-white bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:cursor-not-allowed ">
                Select
              </button>
            ) : (
              <button
                onClick={() => selectClass(classes)}
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Select
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default ClassesCart;

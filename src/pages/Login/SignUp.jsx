import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BiShow, BiHide } from 'react-icons/bi';
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const [error, setError] = useState("");
    const [showPass, setShowPass] = useState(false)
  const [accept, setAccept] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUserData } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserData(data.name, data.photoURL)
        .then(() => {
          const saveUserToDB = { name: data.name, email: data.email, userImg: data.photoURL };
          fetch("https://foreign-languages-center.web.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUserToDB),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <Helmet>
        <title>FLC | Sign Up</title>
      </Helmet>
      <div className="w-[90%] lg:w-[50%] mx-auto p-20 my-5 bg-slate-100 rounded-lg shadow-xl">
        <div className="form-title text-center mb-5">
          <h2 className="text-3xl font-bold text-[#ff2556]">Please Sign Up</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Name field is required
                  </p>
                )}
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Your Name
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("email", {
                    required: "Email field is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-600" role="alert">
                    {errors.email?.message}
                  </p>
                )}
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Email address
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type={showPass ? "text" : "password" }
                  onClick={() => setShowPass(!showPass)}
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("password", {
                    required: "Password field is required",
                  })}
                  {...register("password", {
                    required: "Password field is required",
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <p className="text-red-600" role="alert">
                    {errors.password?.message}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}

                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must be include one Uppercase and one special
                    character.
                  </p>
                )}
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Password
                </label>
                <span className="absolute right-1 top-4 pointer-events-none">{ showPass ? <BiHide /> : <BiShow />}</span>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  id="confirm_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("confirm_password", {
                    required: "Confirm Password field is required",
                  })}
                  aria-invalid={errors.confirm_password ? "true" : "false"}
                />
                {errors.confirm_password && (
                  <p className="text-red-600" role="alert">
                    {errors.confirm_password?.message}
                  </p>
                )}
                <label
                  htmlFor="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Confirm password
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="photo"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("photo", { required: true })}
                  aria-invalid={errors.photo ? "true" : "false"}
                />
                {errors.photo?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Photo URL is required
                  </p>
                )}
                <label
                  htmlFor="photo"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Photo URL
                </label>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    onChange={() => setAccept(!accept)}
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                </label>
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  disabled={!accept}
                  value="Sign Up"
                  className={` text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${
                    accept
                      ? "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      : "bg-gray-300 hover:bg-gray-300 dark:bg-gray-300 dark:hover:bg-gray-300 dark:focus:ring-gray-300"
                  }`}
                />
              </div>
            </div>
          </form>
          <div className="text-center my-3">
            <p>
              Already Have an Account?{" "}
              <Link className="font-bold text-[#ff2556]" to="/login">
                Login
              </Link>
            </p>
          </div>
          {error && (
            <p className="my-3 text-center text-red-600 font-bold">{error}</p>
          )}
          <SocialLogin setError={setError} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

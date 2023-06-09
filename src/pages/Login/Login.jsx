import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const { signIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    setError("");
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        Swal.fire({
          icon: "success",
          title: "Welcome",
          text: "User logged in successfully!",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <div>
      <div className="w-[90%] lg:w-[50%] mx-auto p-20 my-5 bg-slate-100 rounded-lg shadow-xl">
        <div className="form-title text-center mb-5">
          <h2 className="text-3xl font-bold text-[#ff2556]">Please Login</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
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
                  type={showPass ? "text" : "password"}
                  onClick={() => setShowPass(!showPass)}
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("password", {
                    required: "Password field is required",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <p className="text-red-600" role="alert">
                    {errors.password?.message}
                  </p>
                )}
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Password
                </label>
                <span className="absolute right-1 top-4 pointer-events-none">
                  {showPass ? <BiHide /> : <BiShow />}
                </span>
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  value="Login"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                />
              </div>
            </div>
          </form>
          <div className="text-center my-3">
            <p>
              New to Mindware?{" "}
              <Link className="font-bold text-[#ff2556]" to="/signup">
                Sign Up
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

export default Login;

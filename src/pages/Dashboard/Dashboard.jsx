import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiFillDashboard, AiFillContacts } from "react-icons/ai";
import { GiClassicalKnowledge, GiTeacher } from "react-icons/gi";
import { FaHome, FaUsers, FaMoneyBill } from "react-icons/fa";

const Dashboard = () => {
    const [showDrawer, setShowDrawer] = useState(false)
    const user = true;
    const admin = false;
    const instructor = false;
  return (
    <div>
      {/* <!-- drawer init and show --> */}
      <div className="text-center lg:hidden">
        <button
        onClick={()=> setShowDrawer(!showDrawer)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          Show navigation
        </button>
        <Outlet />
      </div>

      {/* <!-- drawer component --> */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full lg:-translate-x-0 ${showDrawer ? '-translate-x-0' : '-translate-x-full'} bg-pink-100 w-80 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
        <button
        onClick={()=> setShowDrawer(!showDrawer)}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {
                admin && <>
                <li>
              <Link
                to="/dashboard/adminHome"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiFillDashboard />
                <span className="ml-3">Admin Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/manageClasses"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GiClassicalKnowledge />
                <span className="ml-3">Manage Classes</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/manageUsers"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaUsers />
                <span className="ml-3">Manage Users</span>
              </Link>
            </li>
                </>
            }

            {
                instructor && <>
                <li>
              <Link
                to="/dashboard/instructorHome"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiFillDashboard />
                <span className="ml-3">Instructor Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addAClass"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GiClassicalKnowledge />
                <span className="ml-3">Add A Class</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myClasses"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaUsers />
                <span className="ml-3">My Classes</span>
              </Link>
            </li>
                
                </>
            }

            {
                user && <>
                <li>
              <Link
                to="/dashboard/studentHome"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiFillDashboard />
                <span className="ml-3">Student Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/mySelectedClasses"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GiClassicalKnowledge />
                <span className="ml-3">My Selected Classes</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myEnrolledClasses"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaUsers />
                <span className="ml-3">My Enrolled Classes</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/paymentHistory"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaMoneyBill />
                <span className="ml-3">Payment History</span>
              </Link>
            </li>
                </>
            }

            <hr className="bg-white h-1"></hr>      
            

            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaHome />
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/instructors"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GiTeacher />
                <span className="ml-3">Instructors</span>
              </Link>
            </li>
            <li>
              <Link
                to="/classes"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GiClassicalKnowledge />
                <span className="ml-3">Classes</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiFillContacts />
                <span className="ml-3">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

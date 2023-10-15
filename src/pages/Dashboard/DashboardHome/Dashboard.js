import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../Firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile px-2 bg-slate-500 py-10 w-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-center text-orange-600">Welcome To Dashboard</h2>

        <Outlet />
        {/* <!-- Page content here --> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay">
          A
        </label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 font-bold text-xl text-teal-500">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/myOrder">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/addReview">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/updateProfile/">My Profile</Link>
          </li>
          {admin && (
            <div>
              <li>
                <Link to="/dashboard/users">All User</Link>
              </li>
              <li>
                <Link to="/dashboard/addTool">Add Tools</Link>
              </li>
            <li><Link to="/dashboard/manageTools">Manage Products</Link></li>
            <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

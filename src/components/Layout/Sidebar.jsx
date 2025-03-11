import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUniversity,
  FaUserGraduate,
  FaNewspaper,
  FaReceipt,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Slices/AuthSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="d-flex flex-column vh-100 p-3 bg-primary text-white container-fluid">
      <h4 className="mb-4">Menu</h4>
      <ul className="nav flex-column flex-grow-1">
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-link ${isActive ? "bg-white text-primary rounded" : "text-white"}`
            }
          >
            <FaUniversity className="me-2" /> Institutions
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/institution-students"
            className={({ isActive }) =>
              `nav-link ${isActive ? "bg-white text-primary rounded" : "text-white"}`
            }
          >
            <FaUserGraduate className="me-2" /> Institution Students
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `nav-link ${isActive ? "bg-white text-primary rounded" : "text-white"}`
            }
          >
            <FaNewspaper className="me-2" /> Blogs/Articles
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/voucher"
            className={({ isActive }) =>
              `nav-link ${isActive ? "bg-white text-primary rounded" : "text-white"}`
            }
          >
            <FaReceipt className="me-2" /> Voucher Requests
          </NavLink>
        </li>
      </ul>
      <div className="mt-auto">
        <button onClick={handleLogout} className="nav-link btn text-white">
          <FaSignOutAlt className="me-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

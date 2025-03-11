import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUniversity,
  FaUserGraduate,
  FaNewspaper,
  FaReceipt,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Slices/AuthSlice";

const Sidebar = () => {
  const [active, setActive] = useState("Institutions");
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
          <Link
            to={"/dashboard"}
            className={`nav-link ${
              active === "Institutions"
                ? "bg-white text-primary rounded"
                : "text-white"
            }`}
            onClick={() => setActive("Institutions")}
          >
            <FaUniversity className="me-2" /> Institutions
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={"/"}
            className={`nav-link ${
              active === "Institution Students"
                ? "bg-white text-primary rounded"
                : "text-white"
            }`}
            onClick={() => setActive("Institution Students")}
          >
            <FaUserGraduate className="me-2" /> Institution Students
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={"/"}
            className={`nav-link ${
              active === "Blogs/Articles"
                ? "bg-white text-primary rounded"
                : "text-white"
            }`}
            onClick={() => setActive("Blogs/Articles")}
          >
            <FaNewspaper className="me-2" /> Blogs/Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={"/"}
            className={`nav-link ${
              active === "Voucher Requests"
                ? "bg-white text-primary rounded"
                : "text-white"
            }`}
            onClick={() => setActive("Voucher Requests")}
          >
            <FaReceipt className="me-2" /> Voucher Requests
          </Link>
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

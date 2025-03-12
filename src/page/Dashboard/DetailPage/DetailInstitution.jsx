import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaEdit, FaSave } from "react-icons/fa";

const DetailInstitution = ({ institution, statusChange }) => {
  const name = useParams().id;
  const [status, setStatus] = useState(institution.status);
  console.log(status);
  const [display, setDisplay] = useState("none");
  const edit = () => {
    setDisplay("inline-block");
  };
  const save = () => {
    setDisplay("none");
    statusChange(status);
  };
  return (
    <div className="container ">
      <header className="align-items-center position-fixed">
        <Link to={"/dashboard"} className="btn btn-primary">
          <FaArrowLeft className="me-2" /> DashBoard
        </Link>
      </header>
      <div className="m-5">
        <div className="mb-3 text-center">
          <img
            src={institution.logo}
            alt="Logo"
            width="200"
            height="200"
            className="rounded-circle shadow"
          />
          <h3 className="m-3">{name}</h3>
        </div>
        <div className="mb-3">
          <strong>Address:</strong> {institution.address}
        </div>
        <div className="mb-3">
          <strong>Website:</strong>{" "}
          <a
            href={institution.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {institution.website}
          </a>
        </div>
        <div className="mb-3">
          <strong>Email:</strong> {institution.email}
        </div>
        <div className="mb-3">
          <strong>Phone:</strong> {institution.phone}
        </div>
        <div className="mb-3">
          <strong>Contact Person:</strong> {institution.contactPerson}
        </div>
        <div className="mb-3">
          <strong>Status:</strong>
          <span
            className={`badge ${
              institution.status === "Approved" ? "bg-success" : "bg-danger"
            } ms-2`}
          >
            {institution.status}
          </span>
          <select
            className={`form-select w-50 d-${display} ms-2`}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="d-flex flex-wrap gap-2 m-3">
          <button
            className="btn btn-outline-danger btn-sm col-12 col-md-auto w-100 w-md-auto"
            onClick={edit}
          >
            <FaEdit className="me-2" />
            Edit
          </button>

          <button
            className={`btn btn-outline-warning btn-sm col-12 col-md-auto w-100 w-md-auto d-${display}`}
            onClick={save}
          >
            <FaSave className="me-2" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailInstitution;

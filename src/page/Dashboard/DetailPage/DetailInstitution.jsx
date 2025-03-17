import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FaArrowLeft, FaEdit, FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  fetchInstitutionById,
  updateInstitutionStatus,
} from "../../../Redux/slices/InstitutionSlice";

const DetailInstitution = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, institution, error } = useSelector(
    (state) => state.institution
  );

  const [status, setStatus] = useState("");
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    dispatch(fetchInstitutionById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (institution) {
      setStatus(institution.status);
    }
  }, [institution]);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    if (institution) {
      dispatch(updateInstitutionStatus({ id: institution._id, status }))
        .then(() => {
          navigate("/dashboard");
        })
        .catch((error) => console.error("Failed to update status:", error));
    }
  };

  if (loading) {
    return (
      <div className="m-5 text-center">
        Loading Institutions. Please wait...
      </div>
    );
  }
  if (error) {
    return <div className="m-5 text-center">Error: {error}</div>;
  }
  if (!institution) {
    return <div className="m-5 text-center">No Institution Found</div>;
  }

  return (
    <div className="container">
      <header className="align-items-center position-fixed">
        <Link to="/dashboard" className="btn btn-primary">
          <FaArrowLeft className="me-2" /> Dashboard
        </Link>
      </header>
      <div className="m-5 text-center">
        <img
          src={`https://ui-avatars.com/api/?name=${institution.name}`}
          alt="Logo"
          width="200"
          height="200"
          className="rounded-circle shadow"
        />
        <h3 className="m-3">{institution.name}</h3>
      </div>
      <div className="m-5">
        <div className="mb-3">
          <strong>Address:</strong> {institution.address}
        </div>
        <div className='mb-3'>
          <strong>Website:</strong>{' '}
          <a href={institution.website} target='_blank' rel='noopener noreferrer'>
            {institution.website}
          </a>
        </div>
        <div className='mb-3'>
          <strong>Email:</strong> {institution.email}
        </div>
        <div className='mb-3'>
          <strong>Phone:</strong> {institution.phone}
        </div>
        <div className='mb-3'>
          <strong>Contact Person:</strong> {institution.contactPerson}
        </div>
        <div className="mb-3 ">
          <strong>Status:</strong>
          <span
            className={`badge ${
              institution.status === 'Approved' ? 'bg-success' : 'bg-danger'
            } ms-2`}
          >
            {institution.status}
          </span>
          {isEditing && (
            <select
              className="form-select w-50 ms-2 d-inline"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          )}
        </div>
        <div className="d-flex flex-wrap gap-2 m-3">
          {!isEditing ? (
            <button
              className="btn btn-outline-danger btn-sm w-100 w-md-auto"
              onClick={handleEdit}
            >
              <FaEdit className="me-2" /> Edit
            </button>
          ) : (
            <button
              className="btn btn-outline-warning btn-sm w-100 w-md-auto"
              onClick={handleSave}
            >
              <FaSave className="me-2" /> Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailInstitution;

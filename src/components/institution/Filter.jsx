import React from "react";
import { useDispatch } from "react-redux";
import { setFilterStatus } from "../../Redux/slices/StudentsSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <select
      className="form-select w-25"
      onChange={(e) => dispatch(setFilterStatus(e.target.value))}
    >
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="Approved">Approved</option>
    </select>
  );
};

export default Filter;

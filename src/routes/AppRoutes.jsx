import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../page/Auth/Login";
import Dashboard from "../page/Dashboard/Dashboard";
import PrivateRoute from "../routes/PrivateRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
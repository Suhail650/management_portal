import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../page/Auth/Login";
import Dashboard from "../page/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./PrivateRoutes";
import InstitutionStudents from "../page/InstitutionStudents/institutionStudents";
import BlogArticle from "../page/Blog/Blog/BlogArticle";
import Voucher from "../page/VoucherRequest/Voucher";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/institution-students" element={<InstitutionStudents/>}/>
        <Route path="/blogs" element={<BlogArticle/>}/>
        <Route path="/voucher" element={<Voucher/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
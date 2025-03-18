import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../page/Auth/Login";
import Dashboard from "../page/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./PrivateRoutes";
import InstitutionStudents from "../page/InstitutionStudents/institutionStudents";
import BlogHome from "../page/Blog/Bloghome";
import BlogDetail from "../page/Blog/BlogDetail";
import CreateBlog from "../page/Blog/CreateBlog";
import Voucher from "../page/VoucherRequest/Voucher";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/institution-students" element={<InstitutionStudents/>}/>
        <Route path="/voucher" element={<Voucher/>}/>

        <Route path="/blogs" element={<BlogHome />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/create" element={<CreateBlog />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../page/Auth/Login";
import Dashboard from "../page/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./PrivateRoutes";
import InstitutionStudents from "../page/InstitutionStudents/institutionStudents";
import BlogArticle from "../page/Blog/Blog/BlogArticle";
import Voucher from "../page/VoucherRequest/Voucher";
import DetailInstitution from "../page/Dashboard/DetailPage/DetailInstitution";

const AppRoutes = () => {
  const institutionData = {
    name: "The Institute of Chartered Accountants of India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNl1ZxXcujPxTra_Vna8UXJgjP5E1R72mQA&s",
    address: "New Delhi, India",
    website: "https://www.icai.org",
    email: "info@icai.org",
    phone: "+91 11 30110400",
    contactPerson: "John Doe",
    status: "Rejected",
  };
  const [status, setStatus] = useState(institutionData.status);
  const statusChange = (s) => {
    setStatus(s);
    institutionData.status = s;
  };
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/institution-students" element={<InstitutionStudents />} />
        <Route path="/blogs" element={<BlogArticle />} />
        <Route path="/voucher" element={<Voucher />} />
        <Route
          path="/institution-details/:id"
          element={
            <DetailInstitution
              institution={{...institutionData,status}}
              statusChange={statusChange}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

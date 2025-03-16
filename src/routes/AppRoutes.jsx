

import { Routes, Route } from "react-router-dom";

import Login from "../page/Auth/Login";
import BlogArticle from "../page/Blog/Blog/BlogArticle";
import Dashboard from "../page/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailInstitution from "../page/Dashboard/DetailPage/DetailInstitution";
import InstitutionStudents from "../page/InstitutionStudents/InstitutionStudents";
import Voucher from "../page/VoucherRequest/Voucher";

import PrivateRoute from "./PrivateRoutes";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/institution-students' element={<InstitutionStudents />} />
        <Route path='/blogs' element={<BlogArticle />} />
        <Route path='/voucher' element={<Voucher />} />
        <Route
          path="/institution-details/:id"
          element={<DetailInstitution />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

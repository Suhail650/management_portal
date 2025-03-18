import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from '../page/Auth/Login';
import BlogDetail from '../page/Blog/BlogDetail';
import BlogHome from '../page/Blog/Bloghome';
import CreateBlog from '../page/Blog/CreateBlog';
import Dashboard from '../page/Dashboard/Dashboard';
import DetailInstitution from '../page/Dashboard/DetailPage/DetailInstitution';
import InstitutionStudents from '../page/InstitutionStudents/institutionStudents';
import Voucher from '../page/VoucherRequest/Voucher';

import PrivateRoute from './PrivateRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/institution-students' element={<InstitutionStudents />} />
        <Route path='/voucher' element={<Voucher />} />

        <Route path='/blogs' element={<BlogHome />} />
        <Route path='/blogs/:id' element={<BlogDetail />} />
        <Route path='/create' element={<CreateBlog />} />
        <Route path='/institution-details/:id' element={<DetailInstitution />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

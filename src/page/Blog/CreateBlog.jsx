import { Form, Button, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import BlogForm from '../../components/Blog/BlogForm';
import MyNavbar from '../../components/Blog/Navbar';
import Sidebar from '../../components/Layout/Sidebar';

const CreateBlog = () => {
  return (
    <div className='row position-fixed' style={{ width: '100vw' }}>
      <div className='col-3'>
        <Sidebar />
      </div>

      <div className='col-9 p-0'>
        <MyNavbar />
        <div className='mt-4'>
          <BlogForm />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;

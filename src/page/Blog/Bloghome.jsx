import React from 'react';

import BlogCard from '../../components/Blog/BlogCard';
import MyNavbar from '../../components/Blog/Navbar';
import Sidebar from '../../components/Layout/Sidebar';

const BlogHome = () => {
  return (
    <div>
      <div className='row position-fixed' style={{ width: '100vw' }}>
        <div className='col-3 '>
          <Sidebar />
        </div>
        <div className='col-9 p-0 '>
          <MyNavbar />
          <div className='mt-4 ' style={{ height: '80vh', overflowY: 'scroll' }}>
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;

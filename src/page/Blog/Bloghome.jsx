import React from 'react';

import BlogCard from '../../components/Blog/BlogCard';
import MyNavbar from '../../components/Blog/Navbar';
import Sidebar from '../../components/Layout/Sidebar';

import style from './blog.module.css'

const BlogHome = () => {
  return (
    <div>
      <div className={`row position-fixed  ${style.customWidth}`}>
        <div className='col-3 '>
          <Sidebar />
        </div>
        <div className='col-9 p-0 '>
          <MyNavbar />
          <div className={`mt-4 ${style.customScroll}`}>
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;

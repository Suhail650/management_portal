import React from "react";
import Sidebar from "../../components/Layout/Sidebar";
import MyNavbar from "../../components/Blog/Navbar";
import BlogCard from "../../components/Blog/BlogCard";

const BlogHome = () => {
  return (
 
    <div >
      <div className="row position-fixed" style={{ width: "100vw" }}>
        <div className="col-3 ">
          <Sidebar />
        </div>
        <div className="col-9 p-0 ">
          <MyNavbar/>
          <div className="mt-4 ">
            <BlogCard/>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default BlogHome;

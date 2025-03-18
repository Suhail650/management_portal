import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../Services/blogService";
import BlogForm from "../../components/Blog/BlogForm";
import MyNavbar from "../../components/Blog/Navbar";
import Sidebar from "../../components/Layout/Sidebar";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!blog.title || !blog.shortDescription || !blog.longDescription) {
      setError("All fields are required!");
      return;
    }

    try {
      await createBlog(blog);
      setSuccess(true);
      setError(null);
      setTimeout(() => navigate("/"), 2000); 
    } catch (err) {
      setError("Failed to create blog. Try again!");
    }
  };

  return (
    
 
 <div className="row position-fixed" style={{ width: "100vw" }}>
    
      
      <div className="col-3">
        <Sidebar />
      </div>

    
      <div className="col-9 p-0">
        <MyNavbar /> 
        <div className="mt-4">
          <BlogForm />
        </div>
      </div>
  
  </div>
    
   
  );
};

export default CreateBlog;

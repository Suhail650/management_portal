



import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getBlogById } from "../../Services/blogService";
import { Container, Button, Form } from "react-bootstrap";
import Sidebar from "../../components/Layout/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state || null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBlog, setEditedBlog] = useState(blog);
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.state) {
      getBlogById(id).then((data) => {
        setBlog(data);
        setEditedBlog(data);
      });
    }
  }, [id, location.state]);

  if (!blog) return <p>Loading...</p>;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setBlog(editedBlog);
    setIsEditing(false);
    alert("Blog updated! (Replace this with an API call to save changes)");
  };

  const handleChange = (e) => {
    setEditedBlog({ ...editedBlog, [e.target.name]: e.target.value });
  };

  return (
    <div className="row position-fixed" style={{ width: "100vw" }}>
      <div className="col-3">
        <Sidebar />
      </div>

      <div className="col-9 p-0 mt-4">
        <Container>
          {!isEditing ? (
            <>
              <h1 className="text-center my-4">{blog.title}</h1>
              <p className="text-muted">{blog.shortDescription}</p>
              <p>{blog.longDescription}</p>
              <Button variant="primary" className="me-2" onClick={handleEditClick}>
                Edit
              </Button>
              <Button onClick={()=>navigate('/blogs')}>Back</Button>
            </>
          ) : (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={editedBlog.title}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Short Description</Form.Label>
                <Form.Control
                  type="text"
                  name="shortDescription"
                  value={editedBlog.shortDescription}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Long Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="longDescription"
                  value={editedBlog.longDescription}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="success" onClick={handleSave}>
                Save
              </Button>
              
            </Form>
          )}
        </Container>
      </div>
    </div>
  );
};

export default BlogDetail;






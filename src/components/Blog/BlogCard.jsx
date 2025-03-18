import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DummyBlogCard = () => {
  const navigate = useNavigate();

  const dummyBlog = {
    id: 1,
    title: "The Power of Consistency in Blogging",
    shortDescription: "Learn how posting regularly can boost your blog's growth and engagement.",
    longDescription: "Consistency is key when it comes to blogging success. Regular posting helps establish authority, improve SEO rankings, and keep your audience engaged. By maintaining a consistent posting schedule, bloggers can create a loyal readership and enhance their online presence. This article explores the importance of consistency, how to develop a sustainable content strategy, and tips for staying motivated on your blogging journey."
  };

  const handleDelete = () => {
    alert(`Blog with ID ${dummyBlog.id} deleted!`); 
    // Replace with actual delete logic (API call)
  };

  return (
    <Card className="mb-4 shadow" style={{ maxWidth: "1000px" }}>
      <Card.Body>
        <Card.Title>{dummyBlog.title}</Card.Title>
        <Card.Text>{dummyBlog.shortDescription}</Card.Text>

        {/* Read More Button - Pass dummyBlog as state */}
        <Button variant="primary" className="me-2" onClick={() => navigate(`/blogs/${dummyBlog.id}`, { state: dummyBlog })}>
          Read More
        </Button>

        {/* Delete Button */}
        <Button variant="primary" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default DummyBlogCard;



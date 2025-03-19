import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteBlog, getBlogs } from '../../services/blogService';
import { useEffect, useState } from 'react';

const DummyBlogCard = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.log(`error fetching blogs : ${error}`);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    setDeleting(true); // Disable button while deleting
    try {
      await deleteBlog(id);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      alert(`Blog with ID ${id} deleted!`);
    } catch (error) {
      alert(`Failed to delete blog: ${error.message}`);
    }
    setDeleting(false); // Re-enable button after deletion
  };

  return (
    <div>
      {blogs.map((dummyBlog) => (
        <Card key={dummyBlog.id} className='mb-4 shadow' style={{ maxWidth: '1000px' }}>
          <Card.Body>
            <Card.Title>{dummyBlog.title}</Card.Title>
            <Card.Text>{dummyBlog.shortDescription}</Card.Text>

            {/* Read More Button - Pass dummyBlog as state */}
            <Button
              variant='primary'
              className='me-2'
              onClick={() => navigate(`/blogs/${dummyBlog.id}`, { state: dummyBlog })}
            >
              Read More
            </Button>

            {/* Delete Button */}
            <Button variant='primary' onClick={() => handleDelete(dummyBlog.id)}>
              {deleting ? 'Deleting...' : 'Delete'}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DummyBlogCard;

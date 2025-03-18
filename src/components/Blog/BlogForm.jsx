import { useState } from 'react';

import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { createBlog } from '../../Services/blogService';

const BlogForm = () => {
  const [blog, setBlog] = useState({ title: '', shortDescription: '', longDescription: '' });
  const [error, setError] = useState(null); // Added error state
  const [success, setSuccess] = useState(false); // Added success state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBlog(blog);
      navigate('/blogs'); // Redirect immediately after success
    } catch (err) {
      navigate('/blogs');
      setError(err, 'Failed to create blog. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <Container>
      <h2 className='text-center my-4'>Create a New Blog</h2>

      {error && <Alert variant='danger'>{error}</Alert>}
      {success && <Alert variant='success'>Blog created successfully!</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            name='title'
            value={blog.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            type='text'
            name='shortDescription'
            value={blog.shortDescription}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Long Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            name='longDescription'
            value={blog.longDescription}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BlogForm;

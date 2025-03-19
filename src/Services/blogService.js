const API_URL = 'http://localhost:5002/api/blogs';

export const getBlogs = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getBlogById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createBlog = async (blog) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blog),
  });
  return response.json();
};

export const deleteBlog = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) throw new Error('Failed to delete blog');
  const text = await response.text();
  return text ? JSON.parse(text) : {};
};

export const editBlog = async (id, updatedBlogData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT', // Use PATCH if updating only specific fields
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedBlogData),
  });

  if (!response.ok) throw new Error('Failed to update blog');
  return response.json();
};

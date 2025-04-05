import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/Admin Styles/ManageSingleBlog.css";

const baseURL = import.meta.env.VITE_API_URL;

const ManageSingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    try {
      const res = await axios.post(`${baseURL}/api/admin/blogs/singleblog`, {
        _id: id,
      });
      setBlog(res.data.data);
    } catch (error) {
      console.error("Error loading blog:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading blog...</div>;

  return (
    <div className="single-blog-wrapper">
      <button
        className="single-blog-back-button"
        onClick={() => navigate("/admin/manage-blogs")}
      >
        ← Back to Blogs
      </button>

      <h1>{blog.title}</h1>
      <p>
        <strong>Meta Title:</strong> {blog.metatitle}
      </p>
      <p>
        <strong>Description:</strong> {blog.metadescription}
      </p>
      <p>
        <strong>Author:</strong> {blog.author}
      </p>
      <p>
        <strong>Keywords:</strong> {blog.keywords}
      </p>

      <img
        src={`${baseURL}/api/uploads/${blog.coverimage}`}
        alt={blog.title}
        className="single-blog-image"
        onError={(e) => (e.target.style.display = "none")}
      />

      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default ManageSingleBlog;

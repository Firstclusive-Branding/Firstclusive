import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "../../styles/Mainpage Styles/Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    document.title = `Blogs - Firstclusive`;
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/user/blog/getall`);

      if (response.data.status === 200) {
        setBlogs(response.data.data);
      } else {
        console.error("Failed to fetch blogs.");
      }
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blogs-container-wrapper">
      <div className="blogs-container">
        <h1 className="blogs-heading">Our Latest Blogs</h1>
        <div className="blogs-cards-wrapper">
          {loading ? (
            <div className="loader">
              <div data-glitch="Loading..." className="glitch">
                Loading...
              </div>
            </div>
          ) : blogs.length > 0 ? (
            blogs.map((blog) => (
              <motion.div
                key={blog._id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="blog-card">
                  <Link to={`/blogs/${blog._id}`} className="blog-link">
                    <img
                      src={`${baseURL}/api/uploads/${blog.coverimage}`}
                      alt={blog.title}
                      className="blog-image"
                    />
                    <div className="blog-text-content">
                      <div className="blog-header">
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-date">
                          {new Date(blog.createdAt).toLocaleDateString("en-GB")}
                        </p>
                      </div>
                      <h3 className="blog-meta-title">{blog.metatitle}</h3>
                      <p className="blog-meta-description">
                        {blog.metadescription}
                      </p>
                      <p className="blog-author">By: {blog.author}</p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="blogs-empty">No blogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

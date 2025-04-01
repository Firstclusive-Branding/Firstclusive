import React from "react";
import { Link } from "react-router-dom";
import BlogsList from "./BlogsList";
import { motion } from "framer-motion";
import "../styles/Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1 className="blogs-heading">Our Latest Blogs</h1>
      <div className="blogs-cards-wrapper">
        {BlogsList.map((blog) => (
          <motion.div
            key={blog.id}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="blog-card">
              <Link to={`/blogs/${blog.id}`} className="blog-link">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="blog-image"
                />
                <div className="blog-text-content">
                  <h2 className="blog-title">{blog.title}</h2>
                  <h3 className="blog-meta-title">{blog.metaTitle}</h3>
                  <p className="blog-meta-description">
                    {blog.metaDescription}
                  </p>
                  <p className="blog-author">By: {blog.author}</p>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

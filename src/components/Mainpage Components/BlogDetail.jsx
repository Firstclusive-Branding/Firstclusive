import React from "react";
import { useParams } from "react-router-dom";
import BlogsList from "./BlogsList";
import "../../styles/Mainpage Styles/BlogDetails.css";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = BlogsList.find((item) => item.id === parseInt(id));

  if (!blog) return <div className="not-found">Blog not found.</div>;

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="blog-details-section"
    >
      <h1 className="main-blog-heading">{blog.title}</h1>

      <div className="blog-details-container">
        <h2 className="blog-details-meta-title">{blog.metaTitle}</h2>
        <p className="blog-details-meta-description">{blog.metaDescription}</p>
        <p className="blog-details-meta-keywords">
          <strong>Keywords:</strong> {blog.keywords}
        </p>

        <div className="blog-details-image-container">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="blog-details-image"
          />
        </div>

        <div className="blog-details-content">{blog.content}</div>
        <p className="blog-details-author">By: {blog.author}</p>
      </div>
    </motion.div>
  );
};

export default BlogDetails;

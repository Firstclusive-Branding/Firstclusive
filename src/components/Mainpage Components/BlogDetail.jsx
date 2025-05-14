import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "../../styles/Mainpage Styles/BlogDetails.css";
import profilepic from "../../assets/Blogs Assets/profile-pic.png";
const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [comments, setComments] = useState([]);

  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchBlogDetails();
    fetchApprovedComments();
  }, [id]);

  const fetchBlogDetails = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/user/blog/single/${id}`);
      if (response.data.status === 200) {
        setBlog(response.data.data);
        document.title = `${response.data.data.title} - Firstclusive`;
      } else {
        console.error("Blog not found.");
      }
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchApprovedComments = async () => {
    try {
      const response = await axios.post(`${baseURL}/api/admin/comment/getall`, {
        pageno: 0,
        sortby: { createdAt: "desc" },
        search: "",
      });
      if (response.data.status === 200) {
        const filtered = response.data.data.comments.filter(
          (c) => c.blogid === id && c.approved === true
        );
        setComments(filtered);
      }
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  const handleCommentChange = (e) => {
    setCommentForm({ ...commentForm, [e.target.name]: e.target.value });
  };

  const submitComment = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post(`${baseURL}/api/user/comment/create`, {
        blogid: id,
        ...commentForm,
      });

      if (response.data.status === 200) {
        setCommentSuccess(true);
        setCommentForm({ name: "", email: "", mobile: "", message: "" });
      }
    } catch (err) {
      console.error("Comment submission failed:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading)
    return (
      <div className="loader">
        <div data-glitch="Loading..." className="glitch">
          Loading...
        </div>
      </div>
    );
  if (!blog) return <div className="not-found">Blog not found.</div>;

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="blog-details-section"
    >
      <div className="blog-details-container">
        <h1 className="main-blog-heading">{blog.title}</h1>
        <h2 className="blog-details-meta-title">{blog.metatitle}</h2>
        <p className="blog-details-meta-description">{blog.metadescription}</p>
        <p className="blog-details-meta-keywords">
          <strong>Keywords:</strong> {blog.keywords}
        </p>

        <div className="blog-details-image-container">
          <img
            src={`${baseURL}/api/uploads/${blog.coverimage}`}
            alt={blog.title}
            className="blog-details-image"
          />
        </div>

        <div
          className="blog-details-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <p className="blog-details-author">By: {blog.author}</p>
      </div>

      <div className="comment-section">
        <h3>Leave a Comment</h3>
        <form onSubmit={submitComment} className="comment-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={commentForm.name}
            onChange={handleCommentChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={commentForm.email}
            onChange={handleCommentChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            value={commentForm.mobile}
            onChange={handleCommentChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Comment"
            value={commentForm.message}
            onChange={handleCommentChange}
            required
          />
          <button type="submit" disabled={submitting}>
            {submitting ? "Posting..." : "Post Comment"}
          </button>
          {commentSuccess && (
            <p className="comment-success">Comment submitted for approval!</p>
          )}
        </form>
      </div>

      <div className="approved-comments">
        <h3>Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((c) => (
            <div key={c._id} className="comment-box">
              <img src={profilepic} alt="User" />
              <div className="comment-content">
                <p className="comment-meta">
                  {c.name} | {new Date(c.createdAt).toLocaleDateString("en-GB")}
                </p>
                <p className="comment-message">{c.message}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default BlogDetails;

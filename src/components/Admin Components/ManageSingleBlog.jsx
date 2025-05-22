import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../styles/Admin Styles/ManageSingleBlog.css";
import Swal from "sweetalert2";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const baseURL = import.meta.env.VITE_API_URL;

const ManageSingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    metatitle: "",
    metadescription: "",
    content: "",
    author: "",
    keywords: "",
  });

  const fetchBlog = async () => {
    try {
      const res = await axios.post(`${baseURL}/api/admin/blogs/singleblog`, {
        _id: id,
      });
      setBlog(res.data.data);
      setFormData(res.data.data);
    } catch (error) {
      console.error("Error loading blog:", error);
      toast.error("Failed to load blog data.");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to recover this blog!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e63946",
      cancelButtonColor: "#eeeeee",
      confirmButtonText: "Yes, delete it!",
      background: "#1c1c1c",
      color: "#ffffff",
    });

    if (result.isConfirmed) {
      try {
        await axios.post(`${baseURL}/api/admin/blogs/delete`, { _id: id });
        toast.success("Blog deleted successfully.");
        navigate("/admin/manage-blogs");
      } catch (err) {
        console.error("Delete failed:", err);
        toast.error("Failed to delete blog.");
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/api/admin/blogs/update`,
        formData
      );
      const blogId = res.data.data?._id || formData._id;

      if (coverImage && blogId) {
        const imgForm = new FormData();
        imgForm.append("coverimage", coverImage);

        await axios.post(
          `${baseURL}/api/admin/blogs/blogimage/${blogId}`,
          imgForm
        );
      }

      toast.success("Blog updated successfully.");
      setShowModal(false);
      setCoverImage(null);
      fetchBlog();
      window.scrollTo(0, 0);
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update blog.");
    }
  };

  if (!blog) return <div>Loading blog...</div>;

  return (
    <div className="single-blog-wrapper">
      <div className="single-blog-actions">
        <button
          className="single-blog-back-button"
          onClick={() => navigate("/admin/manage-blogs")}
        >
          <FaArrowLeft />
          Back to Blogs
        </button>

        <button
          className="single-blog-edit-btn"
          onClick={() => setShowModal(true)}
        >
          <FiEdit3 />
          Edit Blog
        </button>
        <button className="single-blog-delete-btn" onClick={handleDelete}>
          <MdDelete />
          Delete Blog
        </button>
      </div>

      <h1>{blog.title}</h1>
      <p>
        <strong>Meta Title:</strong> {blog.metatitle}
      </p>
      <p>
        <strong>Description:</strong> {blog.metadescription}
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
      <p>
        <strong>Author:</strong> {blog.author}
      </p>

      {/* Edit Modal */}
      {showModal && (
        <div className="blog-edit-modal-overlay">
          <div className="blog-edit-modal" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close-btn">
              <IoCloseSharp
                onClick={() => {
                  setShowModal(false);
                  setCoverImage(null);
                }}
              />
            </span>

            <h2>Edit Blog</h2>

            <label>Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <label>Meta Title</label>
            <input
              name="metatitle"
              value={formData.metatitle}
              onChange={(e) =>
                setFormData({ ...formData, metatitle: e.target.value })
              }
            />

            <label>Meta Description</label>
            <input
              name="metadescription"
              value={formData.metadescription}
              onChange={(e) =>
                setFormData({ ...formData, metadescription: e.target.value })
              }
            />

            <label>Content</label>
            <div className="ckeditor-modal-wrapper">
              <CKEditor
                editor={ClassicEditor}
                data={formData.content}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFormData((prev) => ({ ...prev, content: data }));
                }}
              />
            </div>

            <label>Author</label>
            <input
              name="author"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
            />

            <label>Keywords</label>
            <input
              name="keywords"
              value={formData.keywords}
              onChange={(e) =>
                setFormData({ ...formData, keywords: e.target.value })
              }
            />
            <label>Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setCoverImage(e.target.files[0])}
            />

            <div className="modal-update-btn-wrapper">
              <button onClick={handleUpdate}>Update Blog</button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setCoverImage(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageSingleBlog;

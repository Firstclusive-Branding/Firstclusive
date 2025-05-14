import React, { useEffect, useState, useRef } from "react";
import "../../styles/Admin Styles/ManageBlogs.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { FaPlus, FaRightLong, FaLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

import { toast } from "react-toastify";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const baseURL = import.meta.env.VITE_API_URL;

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    metatitle: "",
    metadescription: "",
    content: "",
    author: "",
    keywords: "",
    published: false,
  });

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [searchTerm, currentPage]);

  const fetchBlogs = async (page) => {
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/api/admin/blogs/getall`, {
        pageno: page,
        sortby: { createdAt: "desc" },
        search: searchTerm || "",
      });

      const blogsArray = res.data.data.blogs;
      const pages = res.data.data.totalPages;

      setBlogs(blogsArray);
      setTotalPages(pages);
    } catch (err) {
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
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
        toast.success("Blog deleted");
        fetchBlogs(currentPage);
      } catch (err) {
        toast.error("Delete failed");
      }
    }
  };

  const openEditModal = (blog) => {
    setEditMode(true);
    setFormData(blog);
    setShowModal(true);
  };

  const handleCreateOrUpdate = async () => {
    try {
      let res;

      if (editMode) {
        res = await axios.post(`${baseURL}/api/admin/blogs/update`, formData);
      } else {
        res = await axios.post(`${baseURL}/api/admin/blogs/create`, formData);
      }

      const blogId = res.data.data?._id || formData._id;

      if (coverImage && blogId) {
        const imgForm = new FormData();
        imgForm.append("coverimage", coverImage);
        await axios.post(
          `${baseURL}/api/admin/blogs/blogimage/${blogId}`,
          imgForm
        );
      }

      toast.success(editMode ? "Blog updated" : "Blog created");
      setShowModal(false);
      resetForm();
      fetchBlogs(currentPage);
      window.scrollTo(0, 0);
    } catch (err) {
      toast.error(
        `Error saving blog: ${
          err.response?.data?.message || "Something went wrong"
        }`
      );
    }
  };

  const resetForm = () => {
    setFormData({
      _id: "",
      title: "",
      metatitle: "",
      metadescription: "",
      content: "",
      author: "",
      keywords: "",
      published: false,
    });
    setCoverImage(null);
    setEditMode(false);
  };

  const togglePublish = async (blog) => {
    try {
      const newStatus = !blog.published;

      await axios.post(
        `${baseURL}/api/admin/blogs/published?publishedid=${blog._id}`,
        {
          published: newStatus,
        }
      );

      fetchBlogs(currentPage);
      toast.success(newStatus ? "Published" : "Unpublished");
    } catch (err) {
      toast.error("Failed to toggle publish");
    }
  };

  const getImageUrl = (filename) => `${baseURL}/api/uploads/${filename}`;

  return (
    <div className="manage-blog-main">
      <div className="manage-blog-topbar">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(0);
          }}
          className="manage-blog-search"
        />
        <button
          onClick={() => {
            setShowModal(true);
            resetForm();
          }}
          className="manage-blog-add-btn"
        >
          <FaPlus /> Create Blog
        </button>
      </div>

      <div className="manage-blog-list">
        {loading ? (
          <p style={{ padding: "20px", textAlign: "center" }}>
            Loading blogs...
          </p>
        ) : blogs.length === 0 ? (
          <p style={{ padding: "20px", textAlign: "center" }}>
            No blogs found.
          </p>
        ) : (
          blogs.map((blog) => (
            <div className="manage-blog-card-vertical" key={blog._id}>
              <div className="manage-blog-card-buttons">
                <span
                  className="publish-toggle-btn"
                  onClick={() => togglePublish(blog)}
                >
                  {blog.published ? "Unpublish" : "Publish"}
                </span>
                <TbEdit
                  size={25}
                  onClick={() => openEditModal(blog)}
                  className="manage-blog-icon edit-icon"
                />
                <MdDelete
                  size={25}
                  onClick={() => handleDelete(blog._id)}
                  className="manage-blog-icon delete-icon"
                />
              </div>

              <img
                src={getImageUrl(blog.coverimage)}
                alt={blog.title}
                className="manage-blog-cover-img"
                onClick={() => navigate(`/admin/manage-singleblog/${blog._id}`)}
              />
              <div className="manage-blog-info">
                <h3
                  onClick={() =>
                    navigate(`/admin/manage-singleblog/${blog._id}`)
                  }
                >
                  {blog.title}
                </h3>
                <p>{blog.metatitle}</p>
                <p>{blog.metadescription}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="manage-blog-pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          <FaLeftLong />
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
          }
          disabled={currentPage + 1 >= totalPages}
        >
          <FaRightLong />
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="manage-blog-modal">
          <div
            className="manage-blog-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="modal-close-cross"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>

            <h2>{editMode ? "Edit Blog" : "Create Blog"}</h2>

            <label>Title</label>
            <input
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <label>Meta Title</label>
            <input
              name="metatitle"
              placeholder="Meta Title"
              value={formData.metatitle}
              onChange={(e) =>
                setFormData({ ...formData, metatitle: e.target.value })
              }
            />

            <label>Meta Description</label>
            <input
              name="metadescription"
              placeholder="Meta Description"
              value={formData.metadescription}
              onChange={(e) =>
                setFormData({ ...formData, metadescription: e.target.value })
              }
            />

            {/* <label>Content</label>
            <textarea
              value={formData.content}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, content: e.target.value }))
              }
            /> */}

            <label>Content</label>
            <div className="ckeditor-wrapper">
              <CKEditor
                editor={ClassicEditor}
                data={formData.content}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFormData((prev) => ({ ...prev, content: data }));
                }}
                config={{
                  toolbar: [
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "link",
                    "bulletedList",
                    "numberedList",
                    "blockQuote",
                    "|",
                    "insertTable",
                    "undo",
                    "redo",
                  ],
                }}
              />
            </div>

            <label>Author</label>
            <input
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
            />

            <label>Keywords</label>
            <input
              name="keywords"
              placeholder="Keywords"
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

            <div className="modal-buttons">
              <button onClick={handleCreateOrUpdate}>
                {editMode ? "Update" : "Create"}
              </button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBlogs;

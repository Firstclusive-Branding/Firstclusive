import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Admin Styles/Comments.css";
import { toast } from "react-toastify";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchComments();
  }, [page, sortOrder]);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseURL}/api/admin/comment/getall`, {
        pageno: page,
        sortby: { createdAt: sortOrder },
        search: search.trim(),
      });

      if (response.data.status === 200) {
        setComments(response.data.data.comments);
        setTotalPages(response.data.data.totalPages || 1);
      }
    } catch (err) {
      toast.error("Failed to fetch comments");
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (id, approved) => {
    try {
      await axios.post(`${baseURL}/api/admin/comment/published/${id}`, {
        approved,
      });
      toast.success(`Comment ${approved ? "approved" : "denied"}`);
      fetchComments();
    } catch (err) {
      toast.error("Failed to update comment status");
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(0);
    fetchComments();
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setPage(0);
  };

  return (
    <div className="admin-comments-container">
      <div className="comments-controls">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search by name, email or message..."
            value={search}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>

        <select value={sortOrder} onChange={handleSortChange}>
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>

      {loading ? (
        <p className="admin-comments-loading">Loading comments...</p>
      ) : comments.length === 0 ? (
        <p className="admin-comments-empty">No comments found.</p>
      ) : (
        <>
          <div className="admin-comments-table-wrapper">
            <table className="admin-comments-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Message</th>
                  <th>Blog Title</th>
                  <th>Date</th>
                  <th>Approve / Deny</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment) => (
                  <tr key={comment._id}>
                    <td style={{ fontStyle: "italic", fontWeight: "bold" }}>
                      {comment.name}
                    </td>
                    <td>
                      <a href={`mailto:${comment.email}`}>{comment.email}</a>
                    </td>
                    <td>{comment.mobile}</td>
                    <td style={{ fontStyle: "italic", fontWeight: "bold" }}>
                      {comment.message}
                    </td>
                    <td>{comment.blogtitle}</td>
                    <td>{new Date(comment.createdAt).toLocaleString()}</td>

                    <td className="table-actions">
                      <label className="comments-approval-switch">
                        <input
                          type="checkbox"
                          checked={comment.approved}
                          onChange={(e) =>
                            handleApproval(comment._id, e.target.checked)
                          }
                        />
                        <span className="comments-approval-slider round"></span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={i === page ? "active" : ""}
                onClick={() => setPage(i)}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
              disabled={page === totalPages - 1}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;

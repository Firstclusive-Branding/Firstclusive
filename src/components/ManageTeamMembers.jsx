import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ManageTeamMembers.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ManageTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    description: "",
    message: "",
    profileimg: null,
  });
  const [editingMember, setEditingMember] = useState(null);
  const [authToken, setAuthToken] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // Fetch team members
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Authentication failed.");
          return;
        }
        setAuthToken(token);

        const response = await axios.get(
          "http://localhost:4000/api/admin/team",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setTeamMembers(
          Array.isArray(response.data.data) ? response.data.data : []
        );
      } catch (err) {
        setError("Error fetching team members.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    setFormData((prevData) => ({ ...prevData, profileimg: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare team member payload (excluding image)
    const payload = {
      name: formData.name,
      role: formData.role,
      description: formData.description,
      message: formData.message,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      let response;
      let teamId;

      if (editingMember) {
        // Update existing team member
        payload._id = editingMember._id;
        response = await axios.post(
          "http://localhost:4000/api/admin/team/update",
          payload,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        teamId = editingMember._id;
      } else {
        // Create new team member
        response = await axios.post(
          "http://localhost:4000/api/admin/team/create",
          payload,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        teamId = response.data.data._id; // Assuming the response contains the new team member's ID
      }

      if (response.data.status === 200) {
        // Handle image upload if a file is selected
        if (formData.profileimg) {
          const imageFormData = new FormData();
          imageFormData.append("profileimg", formData.profileimg);

          await axios.post(
            `http://localhost:4000/api/admin/team/uploadimage/${teamId}`,
            imageFormData,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
        }

        // Refresh team members list
        const updatedResponse = await axios.get(
          "http://localhost:4000/api/admin/team",
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );

        setTeamMembers(updatedResponse.data.data);
        setFormData({
          name: "",
          role: "",
          description: "",
          message: "",
          profileimg: null,
        });
        setEditingMember(null);
        setModalOpen(false);
      } else {
        console.error("Error saving team member:", response.data.message);
      }
    } catch (error) {
      console.error("Error saving team member:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;

    try {
      const response = await axios.post(
        "http://localhost:4000/api/admin/team/delete",
        { _id: id },
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (response.data.status === 200) {
        setTeamMembers(teamMembers.filter((member) => member._id !== id));
      } else {
        console.error("Failed to delete team member:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting team member:", error);
    }
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      description: member.description,
      message: member.message,
      profileimg: null,
    });
    setModalOpen(true);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery) ||
      member.role.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="manage-team-page">
      <div className="team-table-container">
        <div className="manage-team-header">
          <h2 className="manage-team-heading">Manage Team Members</h2>
          <div className="manage-team-actions">
            <input
              type="text"
              placeholder="Search team members"
              className="team-search-bar"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className="team-add-btn" onClick={() => setModalOpen(true)}>
              Add
            </button>
          </div>
        </div>

        {loading ? (
          <p className="team-loading-text">Loading team members...</p>
        ) : error ? (
          <p className="team-error-text">{error}</p>
        ) : (
          <table className="team-table">
            <thead>
              <tr>
                <th className="team-table-header">ID</th>
                <th className="team-table-header">Name</th>
                <th className="team-table-header">Role</th>
                <th className="team-table-header">Description</th>
                <th className="team-table-header">Message</th>
                <th className="team-table-header">Profile Image</th>
                <th className="team-table-header">Created At</th>
                <th className="team-table-header">Edit</th>
                <th className="team-table-header">Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member, index) => (
                <tr key={member._id} className="team-table-row">
                  <td className="team-table-cell">{index + 1}</td>{" "}
                  <td className="team-table-cell">{member.name}</td>
                  <td className="team-table-cell">{member.role}</td>
                  <td className="team-table-cell">{member.description}</td>
                  <td className="team-table-cell">{member.message}</td>
                  <td className="team-table-cell">
                    {member.profileimg ? (
                      <img
                        src={`http://localhost:4000/api/upload/${member.profileimg}?token=Bearer ${authToken}`}
                        alt={member.name}
                        className="team-profile-img"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="team-table-cell">
                    {new Date(member.createdAt).toLocaleDateString()}
                  </td>
                  <td className="team-table-cell">
                    <button
                      onClick={() => handleEdit(member)}
                      className="team-edit-btn"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="team-table-cell">
                    <button
                      onClick={() => handleDelete(member._id)}
                      className="team-delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {modalOpen && (
        <div className="team-modal">
          <div className="team-modal-content">
            <span
              className="team-modal-close"
              onClick={() => setModalOpen(false)}
            >
              <IoMdCloseCircleOutline />
            </span>
            <h3 className="team-form-heading">
              {editingMember ? "Edit Team Member" : "Add New Team Member"}
            </h3>
            <form onSubmit={handleSubmit} className="team-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="team-form-input"
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={formData.role}
                onChange={handleInputChange}
                required
                className="team-form-input"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="team-form-textarea"
              ></textarea>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="team-form-textarea"
              ></textarea>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="team-form-file-input"
              />
              <button type="submit" className="team-form-submit-btn">
                {editingMember ? "Update Member" : "Add Member"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTeamMembers;

import React, { useState, useEffect } from "react";
import "../../styles/Admin Styles/ManageTeam.css";
import { FaTrashAlt, FaEdit, FaTimes, FaUpload } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import placeholderAvatar from "../../assets/Admin Assets/placeholder-avatar.png";

const baseURL = import.meta.env.VITE_API_URL;

const ManageTeam = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    _id: null,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    role: "",
    description: "",
    message: "",
  });
  const [teamData, setTeamData] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTeamMembers = async (search = "") => {
    try {
      setLoading(true);
      const response = await axios.post(`${baseURL}/api/admin/team/getall`, {
        pageno: 0,
        sortby: { createdAt: "desc" },
        search: search,
      });
      setTeamData(response.data.data.teams || []);
    } catch (error) {
      toast.error("Failed to fetch team members.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchTeamMembers(searchTerm);
    }, 400);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const openModal = (member = null) => {
    if (member) {
      setFormData({
        _id: member._id,
        firstName: member.firstName || "",
        lastName: member.lastName || "",
        email: member.email || "",
        mobile: member.mobile || "",
        role: member.role || "",
        description: member.description || "",
        message: member.message || "",
      });
    } else {
      setFormData({
        _id: null,
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        role: "",
        description: "",
        message: "",
      });
    }
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleImageUpload = async (memberId) => {
    if (!imageFile) return;

    const uploadData = new FormData();
    uploadData.append("profileimg", imageFile);

    try {
      await axios.post(
        `${baseURL}/api/admin/team/uploadimage/${memberId}`,
        uploadData
      );
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Save Changes?",
      text: "Please confirm if you want to save this team member's details.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#aef507",
      cancelButtonColor: "#ff4d4d",
      background: "#1e1e1e",
      color: "#fff",
    }).then(async (result) => {
      if (!result.isConfirmed) return;

      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobile: formData.mobile,
        role: formData.role,
        description: formData.description,
        message: formData.message,
      };

      const isEdit = !!formData._id;
      if (isEdit) payload._id = formData._id;

      const url = isEdit
        ? `${baseURL}/api/admin/team/update`
        : `${baseURL}/api/admin/team/create`;

      try {
        const response = await axios.post(url, payload);
        const memberId = isEdit ? formData._id : response.data.data._id;

        if (imageFile) {
          await handleImageUpload(memberId);
        }

        toast.success(
          `Team member ${isEdit ? "updated" : "created"} successfully!`
        );
        setIsModalOpen(false);
        fetchTeamMembers();
      } catch (err) {
        toast.error("Error saving member.");
      }
    });
  };

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will delete the team member!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#aef507",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: "#1e1e1e",
      color: "#fff",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post(`${baseURL}/api/admin/team/delete`, { _id });
          toast.info("User deleted successfully!");
          fetchTeamMembers();
        } catch (err) {
          toast.error("Delete failed.");
        }
      }
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="manage-team-container">
      <div className="manage-team-header">
        <input
          type="text"
          placeholder="Search team member..."
          className="manage-team-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="manage-team-add-btn" onClick={() => openModal()}>
          Add Team Member
        </button>
      </div>

      <div className="manage-team-table-wrapper">
        <table className="manage-team-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Description</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((member, index) => (
              <tr key={member._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={
                      member.profileimg
                        ? `${baseURL}/api/uploads/${member.profileimg}`
                        : placeholderAvatar
                    }
                    alt={`${member.firstName} ${member.lastName}`}
                    className="team-avatar"
                  />
                </td>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.role}</td>
                <td>{member.email}</td>
                <td>{member.mobile}</td>
                <td>
                  {member.description?.length > 100
                    ? member.description.slice(0, 100) + "..."
                    : member.description}
                </td>
                <td>
                  {member.message?.length > 100
                    ? member.message.slice(0, 100) + "..."
                    : member.message}
                </td>

                <td className="manage-team-actions">
                  <button
                    className="icon-btn edit-btn"
                    onClick={() => openModal(member)}
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    className="icon-btn delete-btn"
                    onClick={() => handleDelete(member._id)}
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="team-modal-overlay" onClick={handleCloseModal}>
          <div
            className="team-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="team-modal-close" onClick={handleCloseModal}>
              <FaTimes size={20} />
            </button>
            <h3 className="team-modal-title">
              {formData._id ? "Edit" : "Add"} Team Member
            </h3>
            <form onSubmit={handleSubmit} className="team-modal-form">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
              <label className="upload-label">
                <FaUpload style={{ marginRight: "8px" }} />
                Upload Profile Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
              </label>
              <button type="submit" className="team-modal-submit">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTeam;

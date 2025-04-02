import React, { useState } from "react";
import TeamData from "./TeamData.json";
import "../../styles/Admin Styles/ManageTeam.css";
import { FaTrashAlt, FaEdit, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageTeam = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const openModal = (member = null) => {
    if (member) {
      setFormData({
        firstName: member.firstName || "",
        lastName: member.lastName || "",
        email: member.email || "",
        mobile: member.mobile || "",
      });
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
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
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Form submitted:", formData);
        toast.success("Team member saved successfully!");
        setIsModalOpen(false);
      }
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredData = TeamData;

  const handleDelete = (e) => {
    e.preventDefault();

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
    }).then((result) => {
      if (result.isConfirmed) {
        toast.info("User Deleted Successfully!");
      }
    });
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
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((member, index) => (
              <tr key={member.id}>
                <td>{index + 1}</td>
                <td>
                  {member.firstName} {member.lastName}
                </td>
                <td>{member.role}</td>
                <td>{member.email}</td>
                <td>{member.mobile}</td>
                <td className="manage-team-actions">
                  <button
                    className="icon-btn edit-btn"
                    onClick={() => openModal(member)}
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    className="icon-btn delete-btn"
                    onClick={handleDelete}
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
            <h3 className="team-modal-title">Add / Edit Team Member</h3>
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

import React, { useState } from "react";
import Jobs from "./Jobs.json";
import "../../styles/Admin Styles/ManageJobs.css";
import { FaEdit, FaTrashAlt, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ManageJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(Jobs[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    company_description: "",
    role_description: "",
    qualifications: "",
    bonus: "",
  });

  const openModal = (job = null) => {
    if (job) {
      setFormData({
        title: job.title,
        location: job.location,
        description: job.description,
        company_description: job.details.company_description,
        role_description: job.details.role_description,
        qualifications: job.details.qualifications.join("\n"),
        bonus: job.details.bonus.join("\n"),
      });
    } else {
      setFormData({
        title: "",
        location: "",
        description: "",
        company_description: "",
        role_description: "",
        qualifications: "",
        bonus: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Save Job?",
      text: "Confirm to save this job posting.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#aef507",
      cancelButtonColor: "#ff4d4d",
      confirmButtonText: "Save",
      background: "#1e1e1e",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Job Data:", formData);
        toast.success("Job saved successfully!");
        setIsModalOpen(false);
      }
    });
  };

  const handleDelete = (e, jobTitle) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: `Delete job: ${jobTitle}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#aef507",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: "#1e1e1e",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.info(`Job "${jobTitle}" deleted!`);
      }
    });
  };

  const filteredJobs = Jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-jobs-container">
      <div className="manage-jobs-header">
        <input
          type="text"
          placeholder="Search jobs..."
          className="manage-jobs-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="manage-jobs-add-btn" onClick={() => openModal()}>
          Add Job
        </button>
      </div>

      <div className="manage-jobs-body">
        <div className="manage-jobs-left">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`job-item ${
                selectedJob.id === job.id ? "active-job" : ""
              }`}
              onClick={() => setSelectedJob(job)}
            >
              <h4 className="job-title">{job.title}</h4>
              <p className="job-description">{job.description}</p>
            </div>
          ))}
        </div>

        <div className="manage-jobs-right">
          <div className="job-detail-header">
            <h3>{selectedJob.title}</h3>
            <div className="job-actions">
              <button
                className="icon-btn edit-btn"
                onClick={() => openModal(selectedJob)}
              >
                <FaEdit size={18} />
              </button>
              <button
                className="icon-btn delete-btn"
                onClick={(e) => handleDelete(e, selectedJob.title)}
              >
                <FaTrashAlt size={18} />
              </button>
            </div>
          </div>
          <p>
            <strong>Description:</strong> {selectedJob.description}
          </p>
          <p>
            <strong>Location:</strong> {selectedJob.location}
          </p>
          <p>
            <strong>Company:</strong> {selectedJob.details.company_description}
          </p>
          <p>
            <strong>Role:</strong> {selectedJob.details.role_description}
          </p>

          <div>
            <strong>Qualifications:</strong>
            <ul>
              {selectedJob.details.qualifications.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>

          <div>
            <strong>Bonus Skills:</strong>
            <ul>
              {selectedJob.details.bonus.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="job-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="job-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="job-modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>
            <h3 className="job-modal-title">Add / Edit Job</h3>
            <form onSubmit={handleSubmit} className="job-modal-form">
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Short Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Company Description"
                value={formData.company_description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company_description: e.target.value,
                  })
                }
                required
              />
              <textarea
                placeholder="Role Description"
                value={formData.role_description}
                onChange={(e) =>
                  setFormData({ ...formData, role_description: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Qualifications (one per line)"
                value={formData.qualifications}
                onChange={(e) =>
                  setFormData({ ...formData, qualifications: e.target.value })
                }
              />
              <textarea
                placeholder="Bonus Skills (one per line)"
                value={formData.bonus}
                onChange={(e) =>
                  setFormData({ ...formData, bonus: e.target.value })
                }
              />
              <button type="submit" className="job-modal-submit">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageJobs;

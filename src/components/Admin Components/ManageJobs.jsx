import React, { useEffect, useState } from "react";
import "../../styles/Admin Styles/ManageJobs.css";
import { FaEdit, FaTrashAlt, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/admin/jobposting`;

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
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

  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      setJobs(res.data.data);
      setSelectedJob(res.data.data[0]);
    } catch (err) {
      toast.error("Failed to load jobs");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const openModal = (job = null) => {
    if (job) {
      setFormData({
        title: job.jobtitle,
        location: job.location,
        description: job.description,
        company_description: job.details.company_description,
        role_description: job.details.role_description,
        qualifications: job.details.qualifications.join("\n"),
        bonus: job.details.bonus.join("\n"),
        _id: job._id,
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

  const handleSubmit = async (e) => {
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        const payload = {
          jobtitle: formData.title,
          location: formData.location,
          description: formData.description,
          details: {
            company_description: formData.company_description,
            role_description: formData.role_description,
            qualifications: formData.qualifications.split("\n"),
            bonus: formData.bonus.split("\n"),
          },
        };

        try {
          if (formData._id) {
            await axios.post(`${BASE_URL}/update`, {
              _id: formData._id,
              ...payload,
            });
            toast.success("Job updated successfully!");
          } else {
            await axios.post(`${BASE_URL}/create`, payload);
            toast.success("Job created successfully!");
          }
          setIsModalOpen(false);
          fetchJobs();
        } catch (error) {
          toast.error("Something went wrong while saving the job.");
        }
      }
    });
  };

  const handleDelete = async (e, job) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: `Delete job: ${job.jobtitle}?`,
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
          await axios.post(`${BASE_URL}/delete`, { _id: job._id });
          toast.info(`Job "${job.jobtitle}" deleted!`);
          fetchJobs();
        } catch (error) {
          toast.error("Failed to delete job.");
        }
      }
    });
  };

  const filteredJobs = jobs.filter((job) =>
    job.jobtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleApproval = async (jobId, currentStatus) => {
    try {
      await axios.post(`${BASE_URL}/published/${jobId}`, {
        published: !currentStatus,
      });
      toast.success(
        `Job ${!currentStatus ? "approved" : "unapproved"} successfully.`
      );
      fetchJobs();
    } catch (err) {
      toast.error("Failed to update approval status.");
    }
  };

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
              key={job._id}
              className={`job-item ${
                selectedJob && selectedJob._id === job._id ? "active-job" : ""
              }`}
              onClick={() => setSelectedJob(job)}
            >
              <h4 className="job-title">{job.jobtitle}</h4>
              <p className="job-description">{job.description}</p>
            </div>
          ))}
        </div>

        <div className="manage-jobs-right">
          {selectedJob && (
            <>
              <div className="job-detail-header">
                <h3>{selectedJob.jobtitle}</h3>
                <div className="job-actions">
                  <button
                    className="icon-btn edit-btn"
                    onClick={() => openModal(selectedJob)}
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    className="icon-btn delete-btn"
                    onClick={(e) => handleDelete(e, selectedJob)}
                  >
                    <FaTrashAlt size={18} />
                  </button>
                  <label className="job-approve-switch">
                    <input
                      type="checkbox"
                      checked={selectedJob.published}
                      onChange={() =>
                        toggleApproval(selectedJob._id, selectedJob.published)
                      }
                    />
                    <span className="job-approve-slider job-approve-round"></span>
                  </label>
                </div>
              </div>
              <p>
                <strong>Description:</strong> {selectedJob.description}
              </p>
              <p>
                <strong>Location:</strong> {selectedJob.location}
              </p>
              <p>
                <strong>Company:</strong>{" "}
                {selectedJob.details.company_description}
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
            </>
          )}
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

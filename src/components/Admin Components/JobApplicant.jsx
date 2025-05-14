import React, { useEffect, useState } from "react";
import "../../styles/Admin Styles/JobApplicant.css";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTrashAlt, FaFilePdf } from "react-icons/fa";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_API_URL;

const JobApplicant = () => {
  const [applicants, setApplicants] = useState([]);

  const fetchApplicants = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/admin/jobapplicants/getall`,
        {
          pageno: 0,
          sortby: { createdAt: "desc" },
          search: "",
        }
      );
      setApplicants(res.data.data.applicants);
    } catch (error) {
      toast.error("Failed to load applicants.");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Applicant?",
      text: "Are you sure you want to remove this applicant?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#aef507",
      cancelButtonColor: "#ff4d4d",
      confirmButtonText: "Yes, delete",
      background: "#1e1e1e",
      color: "#fff",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post(`${BASE_URL}/api/admin/jobapplicants/delete`, {
            _id: id,
          });
          toast.success("Applicant deleted successfully.");
          fetchApplicants();
        } catch (err) {
          toast.error("Failed to delete applicant.");
        }
      }
    });
  };

  useEffect(() => {
    document.title = "Job Applicants - Admin Panel";
    fetchApplicants();
  }, []);

  return (
    <div className="applicants-container">
      <div className="applicants-table-wrapper">
        <table className="applicants-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Experience</th>
              <th>Job Title</th>
              <th>Location</th>
              <th>Applied On</th>
              <th>Resume</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicants.length > 0 ? (
              applicants.map((applicant) => (
                <tr key={applicant._id}>
                  <td>{applicant.fullname}</td>
                  <td>{applicant.email}</td>
                  <td>{applicant.contact}</td>
                  <td>{applicant.yearofexperience}</td>
                  <td>{applicant.jobtitle}</td>
                  <td>{applicant.location}</td>
                  <td>{new Date(applicant.createdAt).toLocaleString()}</td>
                  <td className="job-applicant-pdf-icon">
                    <a
                      href={`${applicant.pdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-link"
                    >
                      <FaFilePdf />
                    </a>
                  </td>
                  <td>
                    <button
                      className="applicant-delete-btn"
                      onClick={() => handleDelete(applicant._id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-applicants">
                  No applicants found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobApplicant;

import React, { useEffect, useState } from "react";
import "../../styles/Admin Styles/ManageContacts.css";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";

const BASE_URL = import.meta.env.VITE_API_URL;

const ManageContacts = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/admin/contact/getall`);
      setContacts(res.data.data);
    } catch (err) {
      toast.error("Failed to load contacts");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this contact entry?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#aef507",
      cancelButtonColor: "#ff4d4d",
      confirmButtonText: "Yes, delete it!",
      background: "#1e1e1e",
      color: "#fff",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post(`${BASE_URL}/api/admin/contact/delete`, { id });
          toast.success("Contact deleted");
          fetchContacts();
        } catch (err) {
          toast.error("Failed to delete contact");
        }
      }
    });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="manage-contacts-container">
      <div className="contacts-table-wrapper">
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.companyname}</td>
                <td>{contact.mobile}</td>
                <td>{contact.email}</td>
                <td style={{ maxWidth: "200px" }}>{contact.subject}</td>
                <td>{contact.message}</td>
                {/* <td>{contact.createdAt}</td> */}
                <td>{new Date(contact.createdAt).toLocaleString()}</td>
                <td>
                  <button
                    className="contact-delete-btn"
                    onClick={() => handleDelete(contact._id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan="7" className="no-data">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContacts;

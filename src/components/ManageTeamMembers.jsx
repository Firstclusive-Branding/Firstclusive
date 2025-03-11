import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/signin",
          {
            email: "admin@firstclusive.com",
            password: "1234",
          }
        );

        if (response.data.status === 200) {
          setTeamMembers(response.data.data);
        } else {
          setError("Failed to fetch team members.");
        }
      } catch (err) {
        setError("Error fetching team members.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Team Members</h2>
      {loading ? (
        <p>Loading team members...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
              <th className="border border-gray-300 px-4 py-2">
                Profile Image
              </th>
              <th className="border border-gray-300 px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr key={member._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {member.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.role}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.description}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.message}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.profileimg ? (
                    <img
                      src={`http://localhost:5000/uploads/${member.profileimg}`}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(member.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageTeamMembers;

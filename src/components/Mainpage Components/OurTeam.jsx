import React, { useEffect, useState } from "react";
import "../../styles/Mainpage Styles/OurTeam.css";
import { motion } from "framer-motion";
import axios from "axios";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    document.title = "Our Team - Firstclusive";
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.post(`${baseURL}/api/admin/team/getall`, {
        pageno: 0,
        sortby: { createdAt: "desc" },
        search: "",
      });

      if (response.data.status === 200) {
        setTeamMembers(response.data.data.teams);
      } else {
        console.error("Failed to fetch team data.");
      }
    } catch (err) {
      console.error("API error:", err);
    }
  };

  return (
    <div className="team-container">
      <h1 className="team-heading">Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member) => (
          <motion.div
            className="team-member"
            key={member._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="team-member-image-container">
              <img
                src={`${baseURL}/api/uploads/${member.profileimg}`}
                alt={`${member.firstName} ${member.lastName}`}
                className="team-member-img"
              />
            </div>
            <div className="team-member-info">
              <h3 className="team-member-name">
                {member.firstName} {member.lastName}
              </h3>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-description">{member.description}</p>
              <p className="team-member-message">
                {member.message &&
                  `Message from ${member.firstName}: ${member.message}`}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

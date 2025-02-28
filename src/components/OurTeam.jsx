import React, { useEffect, useState } from "react";
import "../styles/OurTeam.css";
import { motion } from "framer-motion";
import TeamData from "./OurTeamList";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    setTeamMembers(TeamData);
  }, []);

  return (
    <div className="team-container">
      <h1 className="team-heading">Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member) => (
          <motion.div
            className="team-member"
            key={member.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="team-member-image-container">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-img"
              />
            </div>
            <div className="team-member-info">
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-description">{member.description}</p>
              <p className="team-member-message">{`Message from ${member.name}: ${member.message_from}`}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

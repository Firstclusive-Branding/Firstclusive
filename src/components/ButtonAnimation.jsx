import React from "react";
import { Link } from "react-router-dom";
import { PiPhoneCallFill } from "react-icons/pi";
import "../styles/ButtonAnimation.css";

const ButtonAnimation = ({
  text = "GET IN TOUCH",
  icon = true,
  link,
  isSubmit = false,
}) => {
  const ButtonTag = isSubmit ? "button" : Link;

  const props = isSubmit ? { type: "submit" } : { to: link || "/contact-us" };

  return (
    <div className="universal-button">
      <ButtonTag className="universal-button-link" {...props}>
        <span>{text}</span>
        {icon && (
          <span className="universal-button-icon">
            <PiPhoneCallFill size={20} />
          </span>
        )}
        <span className="universal-bubble-effect"></span>
      </ButtonTag>
    </div>
  );
};

export default ButtonAnimation;

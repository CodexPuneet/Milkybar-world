import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Buttons = ({ property1, className, text = "button" }) => {
  return (
    <div className={`buttons ${property1} ${className}`}>
      <div className="button">
        {property1 === "primary-btn" && <>{text}</>}

        {property1 === "disabled" && <>disabled</>}
      </div>
    </div>
  );
};

Buttons.propTypes = {
  property1: PropTypes.oneOf(["primary-btn", "disabled"]),
  text: PropTypes.string,
};

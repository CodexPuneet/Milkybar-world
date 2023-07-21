

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CloseBtn = ({
  className,
  frame = "https://generation-sessions.s3.amazonaws.com/cf5a48e5e02d06c10bc01cea4556488e/img/frame-27.svg",
}) => {
  return (
    <div className={`close-btn ${className}`}>
      <div className="overlap-group">
        <div className="ellipse" />
        <img className="frame" alt="Frame" src={frame} />
      </div>
    </div>
  );
};

CloseBtn.propTypes = {
  frame: PropTypes.string,
};

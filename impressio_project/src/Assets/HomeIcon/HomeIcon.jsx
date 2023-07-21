

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HomeIcon = ({
  className,
  homeIcon = "https://generation-sessions.s3.amazonaws.com/23d9ece802f35b86acc77dc522da359d/img/home-icon-1.svg",
}) => {
  return <img className={`home-icon ${className}`} alt="Home icon" src={homeIcon} />;
};

HomeIcon.propTypes = {
  homeIcon: PropTypes.string,
};

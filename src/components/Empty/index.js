import React from 'react';
import PropTypes from "prop-types";

const Empty = ({ message = 'No data' }) => {
  return <div className="empty">{message}</div>;
};

Empty.propTypes = {
  message: PropTypes.string,
};

export default Empty;

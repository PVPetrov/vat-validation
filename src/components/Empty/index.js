import React from 'react';
import PropTypes from "prop-types";

import './index.css';

const Empty = ({ message = 'No data' }) => {
  return (
    <div className="empty">
      <h3>{message}</h3>
    </div>
  );
};

Empty.propTypes = {
  message: PropTypes.string,
};

export default Empty;

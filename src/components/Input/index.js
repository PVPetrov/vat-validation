import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Input = ({ classes = "", value, action, placeholder = null }) => (
  <input
    className={"input " + classes}
    placeholder={placeholder}
    type="text"
    value={value}
    onChange={action}
  />
);

Input.propTyeps = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  action: PropTypes.func.isRequired,
  classes: PropTypes.string,
}

export default Input;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const Button = ({
  classes = '', value = 'Click', action = null
}) => {

  const [pressed, setPressed] = useState(false)

  const handleClick = () => {
    setPressed(true);
    action();
  }

  const endAnimation = () => setPressed(false);

  return (
    <div
      className={classNames("button", { pressed: pressed }, classes)}
      onClick={handleClick}
      onAnimationEnd={endAnimation}
    >
      {value}
    </div>
  );
}

Button.propTypes = {
  classes: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  action: PropTypes.func,
}

export default Button;

import React from 'react';
import { PropTypes } from 'prop-types';

const ListItem = ({ name, value = "" }) => {
  return (
    <p>
      <span className="name">{name}</span>
      <span className="value">{value}</span>
    </p>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
}

export default ListItem;
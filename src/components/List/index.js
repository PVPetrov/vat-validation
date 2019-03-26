import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

import './index.css';

const InfoSection = ({ data = [] }) => {
  return (
    <div className="info-section">
      {data.map(item => <ListItem key={item.key} {...item} />)}
    </div>
  );
}

InfoSection.propTypes = {
  data: PropTypes.array.isRequired,
}

export default InfoSection;

import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { dismissError } from '../../actions/error';
import Button from '../Button';

import './index.css';

const ErrorMessage = ({
   errors: { err, data }, dismissError 
}) => {
  if(err){
    setTimeout(() => {
      dismissError()
    }, 10000);
  }
  return(
  <div className={err ? "error open": "error"}>
    <p>{data}</p>
    <div className="dismiss-button" onClick={() => dismissError()}>Dismiss</div>
  </div>
)
}
ErrorMessage.propTypes = {
  errors: PropTypes.shape({
    err: PropTypes.bool.isRequired,
    data: PropTypes.string.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
  errors: state.errors
})

const mapDispatchToProps = {
  dismissError
};


export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);

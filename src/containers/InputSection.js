import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from "../components/Button";
import Input from "../components/Input";
import { getVat } from "../actions/vat";
import { error } from "../actions/error";
import validator from "validator";

import './InputSection.css';

const InputSection = ({ getVat, error }) => {
  const [value, setVal] = useState("");

  const handleChange = e => setVal(e.target.value);

  const requestVat = () => {
    let _value = value.trim();
    if (
      validator.isAlphanumeric(_value) &&
      validator.isLength(_value, { min: 2, max: 13 })
    ) {
      getVat(_value);
    } else {
      error(errMssg);
    }
  };

  const errMssg =
    "Input must contain alphanumeric characters and be between 2 and 12 characters long.";

  return (
    <Fragment>
      <div className="input-section">
        <Input value={value} action={handleChange} placeholder="Enter VAT number..." />
        <Button action={requestVat} value="Validate" />
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = {
  getVat,
  error
};

InputSection.propTypes = {
  getVat: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
}

export default connect(
  null,
  mapDispatchToProps
)(InputSection);

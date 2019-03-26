import React from 'react';
import PropTypes from "prop-types";
import { Provider } from 'react-redux';
import App from './App';
import ErrorMessage from '../components/ErrorMessage';

const Root = ({ store }) => (
  <Provider store={store} >
    <ErrorMessage />
    <App />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;

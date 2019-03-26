import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import List from "../components/List";
import Empty from "../components/Empty";
import parseDate from '../utils/parseDate';

const legend = [{
  name: "Country Code",
  key: "CountryCode"
}, {
  name: "Address",
  key: "Address"
}, {
  name: "Name",
  key: "Name"
}, {
  name: "Request Date",
  key: "RequestDate",

}];

const InfoSection = ({ vatData: { data, loading } }) => {

  const createData = (data) => {
    return legend.map(item => {
      return {
        ...item,
        value: item.key === 'RequestDate' ? parseDate(data[item.key]) : data[item.key]
      }
    });
  }

  return loading ? <Loader /> : (
    <div className="info-section">
      {
      !!Object.keys(data).length ? 
          data.Valid ? (
              <List data={createData(data)} />
           ) : (
             <Empty />
           )
        : null
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  vatData: state.vatData
})

const mapDispatchToProps = {
  
}

InfoSection.propTypes = {
  vatData: PropTypes.shape({
    data: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoSection);

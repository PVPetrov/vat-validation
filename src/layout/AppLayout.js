import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

const AppLayout = ({ main = null, header = null }) => (
    <div className="App">
      <header className="App-header">
        {header}
      </header>
      <main className="App-main">
        {main}
      </main>
    </div>
  )

AppLayout.propTypes = {
  main: PropTypes.node,
  header: PropTypes.node,
}

export default AppLayout

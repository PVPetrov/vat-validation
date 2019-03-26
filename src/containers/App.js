import React from 'react';
import AppLayout from "../layout/AppLayout";
import Header from './Header';
import Main from './Main';

import './App.css';


export default () => <AppLayout header={<Header />} main={<Main />} />

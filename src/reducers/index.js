import { combineReducers } from 'redux';
import vatData from  './vatData';
import errors from  './errors';

export default combineReducers({ vatData, errors });
import { combineReducers } from 'redux';
import {
  GET_VAT,
  GET_VAT_SUCCESS,
  GET_VAT_ERROR
} from '../constants.js';


const data = (state = {}, {type, data}) => {
  switch(type){
    case GET_VAT_SUCCESS:
      return {...state, ...data};
    default:
        return state;
  }
}

const loading = (state = false, {type, data}) => {
  switch(type){
    case GET_VAT:
      return true;
    case GET_VAT_SUCCESS:
    case GET_VAT_ERROR:
      return false;
    default:
        return state;
  }
}

export default combineReducers({ data, loading });
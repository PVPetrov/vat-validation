
import { 
  GET_VAT, 
  GET_VAT_SUCCESS, 
  GET_VAT_ERROR 
} from "../constants";
import * as api from '../services';

export const getVat = vat => async dispatch => {
  dispatch({ type: GET_VAT });
  try{
    const response = await api.getVat(vat);
    console.log(response.data)
    // accepting the invalid VAT as a success, since its part of the requested behaviour
    // info message for the wrong VAT to the client would be handled in the data previewing component
    dispatch({ type: GET_VAT_SUCCESS, data: response.data });
  } catch(err) {
    dispatch({
      type: GET_VAT_ERROR,
      data: err.response.data.error
    });
  }
  
}
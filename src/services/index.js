import axios from "axios";

export const getVat = async vat => {
  return await axios.get(`https://vat.erply.com/numbers?vatNumber=${vat}`);
}
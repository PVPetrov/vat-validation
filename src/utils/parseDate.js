import moment from 'moment';

export default (string) => {
  try{
    return moment(new Date(string.split('+')[0])).format('LL');
  } catch(err){
    return 'Invalid date';
  }
}
import constants from './constants';
import axios from 'axios'

export const sendIt = () => ({
  type: constants.SEND_IT,
  payload: axios.post('http://localhost:8080/issue', { description : 'bar'})
})


export const updateIt = (id) => ({
  type: constants.UPDATE_IT,
  payload: axios.put(`http://localhost:8080/issue/${id}/change-description`, { description : 'baz'})
})

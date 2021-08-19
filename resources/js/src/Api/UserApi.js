import Axios from "axios";
import Cookies from "js-cookie";
const Base_API_URL = '/api';

export default {
    getAllUsers : () =>
        Axios.get(`${Base_API_URL}/users`,{
            headers: {
              'Authorization': `Bearer ${Cookies.get('Authorization')}`
            }
          }),
    getOneUser : (id) =>
        Axios.get(`${Base_API_URL}/users/${id}`,{
            headers: {
              'Authorization': `Bearer ${Cookies.get('Authorization')}`
            }
          }),
    addUser: (post) =>
        Axios.post(`${Base_API_URL}/users`, post,{
            headers: {
              'Authorization': `Bearer ${Cookies.get('Authorization')}`
            }
          }),
    updateUser: (post, id) =>
        Axios.put(`${Base_API_URL}/users/${id}`, post,{
            headers: {
              'Authorization': `Bearer ${Cookies.get('Authorization')}`
            }
          }),
    deleteUser: (id) =>
        Axios.delete(`${Base_API_URL}/users/${id}`,{
            headers: {
              'Authorization': `Bearer ${Cookies.get('Authorization')}`
            }
          }),
    
}
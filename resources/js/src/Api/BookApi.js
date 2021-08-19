import Axios from "axios";
import Cookies from "js-cookie";
const Base_API_URL = '/api';

export default {
    getAllBooks : () =>
        Axios.get(`${Base_API_URL}/books`,{
            headers: {
              'Authorization': `Bearer ${Cookies.get('Authorization')}`
            }
          }),
    getOneBook : (id) =>
        Axios.get(`${Base_API_URL}/books/${id}`),
    addBook: (post) =>
        Axios.post(`${Base_API_URL}/books`, post),
    updateBook: (post, id) =>
        Axios.put(`${Base_API_URL}/books/${id}`, post),
    deleteBook: (id) =>
        Axios.delete(`${Base_API_URL}/books/${id}`),
    lostBook: (id) =>
        Axios.get(`${Base_API_URL}/books/${id}/lost-book`,
        {
            headers: {
              'Authorization': `Bearer ${Cookies.get('Authorization')}`
            }
          }
        ),
    
}
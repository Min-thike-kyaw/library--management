import Axios from "axios";
import Cookies from "js-cookie";
const Base_API_URL = 'http://localhost:8000/api/book-records';

export default {
    getAllBookRecords : () =>
        Axios.get(`${Base_API_URL}`,{
            headers: {
              'Authorization': `Bearer ${Cookies.get('Authorization')}`
            }
          }),
    getOneBookRecord : (id) =>
        Axios.get(`${Base_API_URL}/${id}`),
    addBookRecord: (post) =>
        Axios.post(`${Base_API_URL}`,post),
    returnBookRecord: ( id) =>
        Axios.put(`${Base_API_URL}/${id}/return-book`),
    lostBook: ( id) =>
        Axios.put(`${Base_API_URL}/${id}/lost-book`),
    deleteBookRecord: (id) =>
        Axios.delete(`${Base_API_URL}/${id}`),
    
}

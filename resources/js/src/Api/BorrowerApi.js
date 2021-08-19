import Axios from "axios";
const Base_API_URL = 'http://localhost:8000/api/borrowers';

export default {
    getAllBorrowers : () =>
        Axios.get(`${Base_API_URL}`),
    getOneBorrower : (id) =>
        Axios.get(`${Base_API_URL}/${id}`),
    addBorrower: (post) =>
        Axios.post(`${Base_API_URL}`,post),
    updateBorrower: (post, id) =>
        Axios.put(`${Base_API_URL}/${id}`, post),
    deleteBorrower: (id) =>
        Axios.delete(`${Base_API_URL}/${id}`),
    
}

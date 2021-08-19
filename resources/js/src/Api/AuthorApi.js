import Axios from "axios";
const Base_API_URL = '/api';

export default {
    getAllAuthors : () =>
        Axios.get(`${Base_API_URL}/authors`),
    getOneAuthor : (id) =>
        Axios.get(`${Base_API_URL}/authors/${id}`),
    addAuthor: (post) =>
        Axios.post(`${Base_API_URL}/authors`,post),
    updateAuthor: (post, id) =>
        Axios.put(`${Base_API_URL}/authors/${id}`, post),
    deleteAuthor: (id) =>
        Axios.delete(`${Base_API_URL}/authors/${id}`),
    
}
import Axios from "axios";
const Base_API_URL = 'http://localhost:8000/api/categories';

export default {
    getAllCategories : () =>
        Axios.get(`${Base_API_URL}`),
    getOneCategory : (id) =>
        Axios.get(`${Base_API_URL}/${id}`),
    addCategory: (post) =>
        Axios.post(`${Base_API_URL}`,post),
    updateCategory: (post, id) =>
        Axios.put(`${Base_API_URL}/${id}`, post),
    deleteCategory: (id) =>
        Axios.delete(`${Base_API_URL}/${id}`),
    
}


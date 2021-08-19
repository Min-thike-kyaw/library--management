import Axios from "axios";
const Base_API_URL = 'http://localhost:8000/api/departments';

export default {
    getAllDepartments : () =>
        Axios.get(`${Base_API_URL}`),
    getOneDepartment : (id) =>
        Axios.get(`${Base_API_URL}/${id}`),
    addDepartment: (post) =>
        Axios.post(`${Base_API_URL}`,post),
    updateDepartment: (post, id) =>
        Axios.put(`${Base_API_URL}/${id}`, post),
    deleteDepartment: (id) =>
        Axios.delete(`${Base_API_URL}/${id}`),
    
}
import Axios from "axios";

const Base_API_URL = 'http://localhost:8000/api';

export default {
    getAllPosts: () =>
        Axios.get(`${Base_API_URL}/posts`),
    getOnePost: (id) =>
        Axios.get(`${Base_API_URL}/posts/${id}/edit`),
    addPost: (post) =>
        Axios.post(`${Base_API_URL}/posts`,post),
    updatePost: (post, id) =>
        Axios.put(`${Base_API_URL}/posts/${id}`, post),
    deletePost: (id) =>
        Axios.delete(`${Base_API_URL}/posts/${id}`),
}
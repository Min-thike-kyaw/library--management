import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import Cookies from 'js-cookie';


const Home = () => {

    const [posts, setPosts] = useState(null);
    const history = useHistory()
    const fetchPosts = () => {
        api.getAllPosts().then((res) => {
            console.log(res)
            const result = res.data;
            setPosts(result.data);
        })
    }
    useEffect(() => {
        fetchPosts()}, []);
    // console.log(!posts);
    const renderPosts = () => {
        if (!posts) {
            return <tr>
                <td>
                    No post yet!
                </td>
            </tr>
        } else if(posts.length == 0 ) {
            return <tr>
                <td>
                    Add one post
                </td>
            </tr>
        } else {
            return posts.map((post) => 
                
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{ post.description }</td>
                    <td>
                        <Link to={`/edit/${post.id}`} className="btn btn-warning mr-1">Edit</Link>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                api.deletePost(post.id).then((res) => {
                                    fetchPosts()
                                }).catch(err => {
                                    console.log(err)
                                })
                                
                            }}
                        >Delete</button>
                    </td>
                </tr>
            )
            
        }
    }
    return (
        <AppContainer title="Home">
            <Link to="/add" className="btn btn-primary">Click here</Link>
            <div className="table-responsive">
                <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { renderPosts()}
                </tbody>
                </table>
            </div>
        </AppContainer>
    );
}

export default Home;
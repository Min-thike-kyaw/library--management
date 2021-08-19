import { async } from 'q';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
// import { useEffect } from 'react/cjs/react.development';
const Add = () => {
    const { id } = useParams();
    // const [post, setPost] = useState(null);

    console.log(id);
    
    const history = useHistory();
    const [loading, setLoadig] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    useEffect (() => {
        api.getOnePost(id).then((res) => {
            // console.log(res.data.data)
            // res = res.data;
            const post = res.data.data;
            // console.log(res.data.data);
            // console.log(result.title)
            // setPost(result)
            console.log(post)
            setTitle(post.title)
            setDescription(post.description)
        })
    },[])
    const onEditSubmit = async () => {
        setLoadig(true)
        try {
            await api.updatePost({
                title, description
            }, id)
        history.push('/');
        } catch {
            alert("i feel something wrong")
        } finally {
            setLoadig(false)
        }
    }
    return (
        <AppContainer title="Edit a Post">
            <div className="container">
                <form>
                    <div className="form-group">
                        <label className="">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange = {e => setTitle(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label className="">Description</label>
                        <textarea
                            className="form-control"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={onEditSubmit}
                        disabled={loading}
                    >
                        {loading ? "Loading.." : "Update"}
                    </button>
                </form>
            </div>
        </AppContainer>
    );
}

export default Add;
import { async } from 'q';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
const Add = () => {
    const history = useHistory();
    const [loading, setLoadig] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const onAddSubmit = async () => {
        setLoadig(true)
        try {
            await api.addPost({
                title, description
            })
        history.push('/');
        } catch {
            alert("i feel something wrong")
        } finally {
            setLoadig(false)
        }
    }
    return (
        <AppContainer title="Add a Post">
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
                        onClick={onAddSubmit}
                        disabled={loading}
                    >
                        {loading ? "Loading.." : "Add"}
                    </button>
                </form>
            </div>
        </AppContainer>
    );
}

export default Add;
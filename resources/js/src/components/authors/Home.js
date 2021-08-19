import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthorApi from '../../Api/AuthorApi';
import AppContainer from "../AppContainer";

const Home = () => {
    const [authors, setAuthors] = useState([])

    // useEffect(() => AuthorApi.getAllAuthors().then((res => {
    //     setAuthors(res)
    // })), [])
    useEffect(() => {
        AuthorApi.getAllAuthors().then((res) => {
            console.log(res)
            const data = res.data.data
            console.log(data.length)
            setAuthors(data);
            // console.log(authors.books);
        })
    }, [])
    const renderAuthors = () => {
        if (authors == []) {
           return <td>No author to show</td>
        } else if (authors) {
            
            return authors.map((author, key) => 
            <>
                    <tr key={author.id}>
                        <td>{ ++key}</td>
                        <td>{author.name}</td>
                        {/* <td>{}</td> */}
                        <td>{author.books.length}</td>
                        <Link to={`/authors/${author.id}` } className="btn btn-outline-primary">See books</Link>
                </tr>
            </>
    )}
    }
    return (
        <AppContainer title="Author">
            <div className="table-responsive">
                <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Total Books</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderAuthors()}
                </tbody>
                </table>
            </div>
        </AppContainer>
    )
}
export default Home;
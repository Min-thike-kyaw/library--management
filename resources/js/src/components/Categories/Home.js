import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthorApi from '../../Api/AuthorApi';
import CategoryApi from '../../Api/CategoryApi';
import AppContainer from "../AppContainer";

const Home = () => {
    const [categories, setCategories] = useState([])

    
    useEffect(() => {
        CategoryApi.getAllCategories().then((res) => {
            
            const data = res.data.data
            // console.log(data)
            setCategories(data);
            // console.log(authors.books);
        })
    }, [])
    const renderCategories = () => {
        if (categories == []) {
           return <td>No author to show</td>
        } else if (categories) {
            return categories.map((category, key) => 
            <>
                    <tr key={category.id}>
                        <td>{ ++key}</td>
                        <td>{category.name}</td>
                        {/* <td>{}</td> */}
                        <td>{category.books.length}</td>
                        <Link to={`/categories/${category.id}` } className="btn btn-outline-primary">See books</Link>
                </tr>
            </>
    )}
    }
    return (
        <AppContainer title="Categories">
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
                    {renderCategories()}
                </tbody>
                </table>
            </div>
        </AppContainer>
    )
}
export default Home;
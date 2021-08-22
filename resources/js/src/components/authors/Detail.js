import React, { useState,useEffect } from "react";

import { useParams } from 'react-router-dom';
import AuthorApi from "../../Api/AuthorApi";
import BookApi from "../../Api/BookApi";
import Render from "../Render";


const Detail = () => {
    const { id } = useParams();
    const [title,setTitle] = useState('')
    const [books,setBooks] = useState([])
    useEffect(() => {
        AuthorApi.getOneAuthor(id).then((res) => {
          setTitle(res.data.data.name) 
       }) 
    }, [])
    const fetchBooks = () => {
        BookApi.getAllBooks().then((res) => {
            const author_books = res.data.data.filter((data) => data.author_id == id)
            setBooks(author_books)
        })
    }
    
    useEffect(() => fetchBooks(), [])
    return <Render  books={ books }/>
    
}

export default Detail;
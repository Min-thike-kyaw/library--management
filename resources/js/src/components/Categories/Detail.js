import React, { useState,useEffect } from "react";

import { useParams } from 'react-router-dom';
import BookApi from "../../Api/BookApi";
import CategoryApi from "../../Api/CategoryApi";
import Render from "../Render";

const Detail = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('')
    const [books, setBooks] = useState([])
    useEffect(() => {
        CategoryApi.getOneCategory(id).then((res) => {
          setTitle(res.data.data.name) 
       }) 
    }, [])
    const fetchBooks = () => {
        BookApi.getAllBooks().then((res) => {
            const category_data = res.data.data.filter(function (book) {
                if (Array.isArray(book.categories) && book.categories.length !== 0) {
                    for (let category of book.categories) {
                        if (category.id == id) {
                            return true
                        }
                    } 
                    // console.log(book.categories)
                    return false
                } else {
                    return false
                }
            })
            setBooks(category_data)
        })
    }
    useEffect(() => fetchBooks(), [])
    
    return <Render books={books}/>
    
}

export default Detail;
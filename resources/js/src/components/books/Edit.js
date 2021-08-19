// import { exit } from "process";
import React, { useState,useEffect } from "react";
import { Link, useHistory , useParams } from "react-router-dom";
import AuthorApi from "../../Api/AuthorApi";
import BookApi from "../../Api/BookApi";
import CategoryApi from "../../Api/CategoryApi";
import AppContainer from "../AppContainer";
// import { MDBInput } from 'mdbreact';



const Edit = () => {
    const { id } = useParams();
    const history = useHistory()
    // const [book, setBook] = useState({})
    const [authors, setAuthors] = useState(null);
    const [categories_view, setCategoriesView] = useState(null);
    const [categories, setCategories] = useState([]);
    const [edit_categories, setEditCategories] = useState([]);
    const [name, setName] = useState("")
    const [author_id, setAuthorId] = useState(0)
    const [is_donated, setIsDonated] = useState(1)
    const [priceType, setPriceType] = useState("hidden")
    const [price, setPrice] = useState(null)
    // const { id } = useParams();
    // const handleSubmit = () => {
    //     console.log(categories)
    // }
    // console.log(id)
    useEffect(() => {
        BookApi.getOneBook(id).then((res) => {
            // setBook(res.data.data)
            // console.log(res.data.data)
            const book = res.data.data
            setName(book.name)
            setPrice(book.price)
            setIsDonated(book.is_donated)
            setAuthorId(book.author_id)
            setEditCategories(book.categories)
        })
    }, [])
    useEffect(() => {
        AuthorApi.getAllAuthors().then((res) => {
            // console.log(res)
            const data = res.data.data
            setAuthors(data);
            // console.log(books);
        })
    }, [])
    
    useEffect(() => {
        CategoryApi.getAllCategories().then((res) => {
            // console.log(res)
            const data = res.data.data
            setCategoriesView(data);
            // console.log(books);
        })
    }, [])
    useEffect(() => {
        if (is_donated == 0) {
            setPriceType("number")
            // exit
            // alert(123)
        } else {
            setPriceType("hidden")
            // exit
        }
    })
    

    const renderAuthors = () => {
        if (authors == null) {
            return <option className="form-control" >No author to show</option>;
        } else {
            return authors.map((author) => 
                <option
                    key={author.id}
                    value={author.id} >{author.name}</option>
            )
        }
    }
    const renderCategories = () => {
        if (categories_view == null) {
            return <p>No category to show</p>
        } else {
            return categories_view.map((category) =>
                <div key={category.id} className="custom-checkbox mx-1">
                    {/* <MDBInput label="Material unchecked" checked type="checkbox" id="checkbox2" />
                     */}

                    <input type="checkbox"
                        value={category.id}
                        // { edit_categories.find(element => element == category.id)? defaultChecked = "hello"}
                        
                        // name={categories
                        
                        onChange={(e)=> setCategories([...categories,e.target.value])}
                    />
                    
                    <label className="form-check-label">{ category.name}</label>
                </div>
            )
        }
    }
    
    const handleSubmit = async () => {
        
        try {
            // alert(author_id);
            await BookApi.updateBook({
                "name" : name,
                "author_id" : author_id,
                "is_donated" : is_donated,
                "price": price,
                "categories": categories,
            },id).then(
                history.push('/books')
            )
                .catch(error => {
                console.log(error.response.data)
            })
        history.push('/books');
        } catch {
            // console.log("hello")
            alert("i feel something wrong")
        } finally {
         alert ("ok")   
        }
    }
    
    return (<AppContainer title="Edit book">
        <div>
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">

                <div className="card-body">
                    <form id="my-form">
                       
                        <div className="form-group">
                            <label>Book Name</label>
                                    <input
                                        type="text"
                                        // name={name}
                                        value={name}
                                        onChange={(e) => setName(e.target.value )}
                                        className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                                    <select
                                        value={author_id}
                                        
                                        onChange={(e)=> setAuthorId(e.target.value)}
                                        className="form-control">
                                        <option disabled selected>Choose author</option>
                                {renderAuthors()}
                                    {/* <option className="form-control" value="{{$author->id}}">$author-name</option> */}
                              
                            </select>
            
                        </div>
                        <div className="form-group" >
                            <label>is Donated?</label>
                            
                                    <select
                                        value={is_donated}
                                        onChange={(e) => setIsDonated(e.target.value )}
                                        className="form-control">
                                <option value="1">Donated</option>
                                <option value="0">Not donated</option>
                            </select>
                            
                            </div>
                                <div className="form-group">
                            
                                    <input
                                        placeholder="Price"
                                        type={priceType}
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value )}
                                        className="form-control" />
                        </div>
                        <div className="form-check">
                            
                                <legend>Choose Categories</legend>
                                <div className="row">
                                {renderCategories()}
                                
                                </div>
                                
                        
                        </div>
                        <button className="btn btn-primary" onClick={handleSubmit} >Update</button>
                        <Link to="/books" className="btn btn-danger ml-2">Cancel</Link>
                                
                    </form>
                </div>
            
        </div>
    </div>
</div>
    </div>
    </AppContainer>)
}


  
  
  
export default Edit;
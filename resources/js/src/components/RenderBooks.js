import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import BookApi from "../Api/BookApi";
import { Modal, Button } from "react-bootstrap";
import BookRecordApi from "../Api/BookRecordApi";
import AppContainer from "./AppContainer";
// import { isArray } from "util";
// import {  ToBorrow } from "../Buttons";
// import api from "../../api";
// import times from "../Times";
  
const RenderBooks = (props) => {
    const [books, setBooks] = useState(null);
    // const [title, setTitle] = useState("")
    const ToBorrow = (props) => {
        const history = useHistory()
        const [show, setShow] = useState(false);
        const [borrower_id, setBorrrower_id] = useState(null);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const saveBookRecord = async () => {
            try {
                await BookRecordApi.addBookRecord({
                    "book_id": props.book_id,
                    "borrower_unique_id" : borrower_id, 
                }).then(
                    handleClose(),
                    history.push('/books'),
                    setBorrrower_id(null),
                    fetchBooks(),
                    // renderPosts()
                ).catch((error) => {
                    console.log(error.response.data)    
                    }
                )
            } catch {
                alert("i feel something wrong")
            } finally {
                alert("okay")
            }
        }
      
        return (
          <>
            <Button variant="success mr-1" onClick={handleShow}>
              to Borrow 
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                    <h2>To Borrow</h2>
                </Modal.Title>
              </Modal.Header>
                    <Modal.Body>
                        
                        <div className="form-group">
                            <label>Borrower's unique id to borrow `{props.book_name}` </label>
                            <input className="form-control"
                                value={borrower_id}
                                onChange={(e) => setBorrrower_id(e.target.value)}
                            />
                        </div>
                    </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={saveBookRecord}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
    // const books = props.books;
    
    const fetchBooks = () => {
        
        // props.books.then((res) => {
            // const data = res.data.data
        // console.log(books)
        // })
        // const targetId = eval( props.books.targetId);
        
        BookApi.getAllBooks().then((res) => {
        console.log(res)
            switch (props.books.targetId) {
                case 'author_id':
                    const author_data = res.data.data.filter((data) => data.author_id == props.books.idValue)
                    setBooks(author_data);
                    break
                case 'category_id':
                    const category_data = res.data.data.filter(function (book) {
                        if (Array.isArray(book.categories) && book.categories.length !== 0) {
                            for (let category of book.categories) {
                                if (category.id == props.books.idValue) {
                                    return true
                                }
                            } 
                            // console.log(book.categories)
                            return false
                        } else {
                            return false
                        }
                    })
                    
                    
                    setBooks(category_data);
                    break
                default:
                    const default_data = res.data.data
                    setBooks(default_data);
                    break
        }
            
        
        })
        
    }
    
    
      
    useEffect(() => fetchBooks(), [])
    const renderPosts = () => {
        console.log(props.books)
        if (!books) {
            return (<tr>
                <td>No book to show</td>
            </tr>)
        } else {
            // return <h1>Hello</h1>
            return books.map((book, key) =>
                // <tr>
                //     <td>{book.id}</td>
                //     <td>{book.name}</td>
                // </tr>
                
                <tr key={book.id}>
                    <td>{ ++key}</td>
                    <td>{ book.name }</td>
                    <td>{book.author.name}</td>
                    {/* <td className="btn btn-success">{ book.categories }</td> */}
                    <td>{book.categories.map((category) => 
                        <button className="badge badge-secondary" key={ category.id}>{category.name }</button>
                    )}</td>
                    <td>{book.is_donated ? "donated" : book.price}</td>
                    
                    <td><span className="badge badge-primary">{book.book_condition}</span></td>
                    <td>{ (book.book_edition).toUpperCase()}</td>
                    


                    <td>
                        {/* <button className="btn btn-success mr-1" onClick={toBorrow()}>To Borrow</button> */}
                        <div>
                            { book.book_condition === "available"? <ToBorrow book_id={book.id} book_name={ book.name}/> : ""}
                        
                        
                        
                        </div>
                        <div className="row">
                        <Link to={`books/edit/${book.id}`} className="btn btn-warning mr-1">Edit</Link>
                        <button onClick={
                            () => {
                                BookApi.deleteBook(book.id).then(() => {
                                    fetchBooks()
                                }).catch((err) => {
                                    console.log(err)
                                } )
                            }
                        } className="btn btn-danger">Delete</button>
                        </div>
                        
                    </td>
                </tr>
            )
        }
        // return books.map((book, key) =>
        //     <tr>
        //         <td>{book.id}</td>
        //         <td>{book.name}</td>
        //     </tr>)
                

    }
    
    // useEffect
    
    return (<AppContainer title={props.title}>
        <div>
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-12">
            <div className="card-body">
                    <div className="table-responsive">
                    
                        <div className="row justify-content-end mr-3"><Link to="/books/add" className="btn btn-primary">+ Add one book</Link></div>
                                {/* <Example /> */}
                                
                                
                       <table className="table table-striped mt-4">
                        <thead >
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                            <th>author</th>
                                            <th>categories</th>
                                <th>Price</th>
                                <th>Condition</th>
                                <th>Edition</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {renderPosts()}
  
                        </tbody>
                        </table>
                    </div>
                    
                       
                </div>
        </div>
    </div>
</div>


  </div>
    </AppContainer>)
}
export default RenderBooks;
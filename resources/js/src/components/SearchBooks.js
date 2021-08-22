import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import BookApi from '../Api/BookApi';
import AppContainer from './AppContainer';
import Render from './Render';

const SearchBooks = () => {
    // const ToBorrow = (props) => {
    //     const history = useHistory()
    //     const [show, setShow] = useState(false);
    //     const [borrower_id, setBorrrower_id] = useState(null);
    //     const handleClose = () => setShow(false);
    //     const handleShow = () => setShow(true);
    //     const saveBookRecord = async () => {
    //         try {
    //             await BookRecordApi.addBookRecord({
    //                 "book_id": props.book_id,
    //                 "borrower_unique_id" : borrower_id, 
    //             }).then(
    //                 handleClose(),
    //                 history.push('/books'),
    //                 setBorrrower_id(null),
    //                 fetchBooks(),
    //                 // renderPosts()
    //             ).catch((error) => {
    //                 console.log(error.response.data)    
    //                 }
    //             )
    //         } catch {
    //             alert("i feel something wrong")
    //         } finally {
    //             alert("okay")
    //         }
    //     }
      
    //     return (
    //       <>
    //         <Button variant="success mr-1" onClick={handleShow}>
    //           to Borrow 
    //         </Button>
      
    //         <Modal show={show} onHide={handleClose}>
    //           <Modal.Header closeButton>
    //             <Modal.Title>
    //                 <h2>To Borrow</h2>
    //             </Modal.Title>
    //           </Modal.Header>
    //                 <Modal.Body>
                        
    //                     <div className="form-group">
    //                         <label>Borrower's unique id to borrow `{props.book_name}` </label>
    //                         <input className="form-control"
    //                             value={borrower_id}
    //                             onChange={(e) => setBorrrower_id(e.target.value)}
    //                         />
    //                     </div>
    //                 </Modal.Body>
    //           <Modal.Footer>
    //             <Button variant="secondary" onClick={handleClose}>
    //               Close
    //             </Button>
    //             <Button variant="primary" onClick={saveBookRecord}>
    //               Save Changes
    //             </Button>
    //           </Modal.Footer>
    //         </Modal>
    //       </>
    //     );
    //   }
    const [books, setBooks] = useState()
    const { name } = useParams();
    const fetchBooks = () => {
        
        BookApi.getAllBooks().then((res) => {
        // console.log(res)
            const data = res.data.data.filter((book) => {
                const book_name = book.name.toLowerCase()
                return book_name.includes(name);
            })
            console.log(data)
            setBooks(data);
        })    
    }
    console.log(books)
    console.log(name.toString().toLowerCase())
    useEffect(() => fetchBooks(), [name])
    // const renderBooks = () => {
        
    //     if (!books) {
    //         return (<tr>
    //             <td>No book to show</td>
    //         </tr>)
    //     } else {
    //         // return <h1>Hello</h1>
    //         return books.map((book, key) =>
    //             // <tr>
    //             //     <td>{book.id}</td>
    //             //     <td>{book.name}</td>
    //             // </tr>
                
    //             <tr key={book.id}>
    //                 <td>{ ++key}</td>
    //                 <td>{ book.name }</td>
    //                 <td>{book.author.name}</td>
    //                 {/* <td className="btn btn-success">{ book.categories }</td> */}
    //                 <td>{book.categories.map((category) => 
    //                     <button className="badge badge-secondary" key={ category.id}>{category.name }</button>
    //                 )}</td>
    //                 <td>{book.is_donated ? "donated" : book.price}</td>
                    
    //                 <td><span className="badge badge-primary">{book.book_condition}</span></td>
    //                 <td>{ (book.book_edition).toUpperCase()}</td>
                    


    //                 <td>
    //                     {/* <button className="btn btn-success mr-1" onClick={toBorrow()}>To Borrow</button> */}
    //                     <div>
    //                         { book.book_condition === "available"? <ToBorrow book_id={book.id} book_name={ book.name}/> : ""}
                        
                        
                        
    //                     </div>
    //                     <div className="row">
    //                     <Link to={`books/edit/${book.id}`} className="btn btn-warning mr-1">Edit</Link>
    //                     <button onClick={
    //                         () => {
    //                             BookApi.deleteBook(book.id).then(() => {
    //                                 fetchBooks()
    //                             }).catch((err) => {
    //                                 console.log(err)
    //                             } )
    //                         }
    //                     } className="btn btn-danger">Delete</button>
    //                     </div>
                        
    //                 </td>
    //             </tr>
    //         )
    //     }
    //     // return books.map((book, key) =>
    //     //     <tr>
    //     //         <td>{book.id}</td>
    //     //         <td>{book.name}</td>
    //     //     </tr>)
                

    // }
//     return (<AppContainer title="Books matched">
//         <div>
// <div className="container">
//     <div className="row justify-content-center">
//         <div className="col-md-12">
//             <div className="card-body">
//                     <div className="table-responsive">
                    
//                         <div className="row justify-content-end mr-3"><Link to="/books/add" className="btn btn-primary">+ Add one book</Link></div>
//                                 {/* <Example /> */}
                                
                                
//                        <table className="table table-striped mt-4">
// <thead >
//                             <tr>
//                                 <th>No</th>
//                                 <th>Name</th>
//                                             <th>author</th>
//                                             <th>categories</th>
//                                 <th>Price</th>
//                                 <th>Condition</th>
//                                 <th>Edition</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {renderBooks()}
  
//                         </tbody>
//                         </table>
//                     </div>
                    
                       
//                 </div>
//         </div>
//     </div>
// </div>


//   </div>
//     </AppContainer>)
    return <Render books={books} />
    
    
}
export default SearchBooks;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import BookApi from "../../Api/BookApi";
import BorrowerApi from "../../Api/BorrowerApi";
import AppContainer from "../AppContainer";
// import api from "../../api";

const Home = () => {
    const [borrowers, setBorrowers] = useState(null);
    const fetchBorrowers = () => {
        BorrowerApi.getAllBorrowers().then((res) => {
            // console.log(res)
            const data = res.data.data
            setBorrowers(data);
            // console.log(books);
        })
    }
    
    useEffect(() => fetchBorrowers(), [])
    const renderPosts = () => {
        if (!borrowers) {
            return (<tr>
                <td>No Borrower to show</td>
            </tr>)
        } else {
            // return <h1>Hello</h1>
            return borrowers.map((borrower,key) => 
                <tr key={borrower.id}>
                    <td>{++key}</td>
                    <td>{ borrower.name }</td>
                    <td>{borrower.unique_id}</td>
                    {/* <td className="btn btn-success">{ borrower.categories }</td> */}
                    {/* <td>{borrower.categories.map((category) => 
                        <button key={ category.id}>{category.name }</button>
                    )}</td> */}
                    <td>{borrower.sex ? "male" : "female"}</td>
                    <td>{borrower.email}</td>
                    <td>{borrower.phone_no}</td>

                    <td>
                        <Link  to={`borrowers/${borrower.id}`} className="btn btn-outline-success">Detail</Link>
                        <Link to={`borrowers/edit/${borrower.id}`} className="btn btn-outline-warning">Edit</Link>
                        <button onClick={
                            () => {
                                BorrowerApi.deleteBorrower(borrower.id).then(() => {
                                    fetchBorrowers()
                                }).catch((err) => {
                                    console.log(err)
                                } )
                            }
                        } className="btn btn-outline-danger">Delete</button>
                    </td>
                </tr>
            )
        }
    }
    
    // useEffect
    
    return <AppContainer title="Member">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-12">
            
                
                <div className="card-body">
                    <div className="table-responsive">
                    
                        <div className="row justify-content-end mr-3"><Link to="/borrowers/add" className="btn btn-primary">+ Add one book</Link></div>
                    
                       <table className="table table-striped mt-4">
                        <thead >
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Id</th>
                                
                                <th>Sex</th>
                                <th>Email</th>
                                <th>Phone number</th>
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


  </AppContainer>
}
export default Home;
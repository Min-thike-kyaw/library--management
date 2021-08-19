import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BorrowerApi from "../../Api/BorrowerApi";
import UserApi from "../../Api/UserApi";
import Auth from "../../functions/Auth";
import AppContainer from "../AppContainer";
// import api from "../../api";

const Home = () => {
    const [users, setUsers] = useState(null);
    const fetchUsers = () => {
        UserApi.getAllUsers().then((res) => {
            console.log(res.data.users)
            const data = res.data.users
            setUsers(data);
            // console.log(books);
        })
    }
    
    useEffect(() => fetchUsers(), [])
    const renderPosts = () => {
        if (!users) {
            return (<tr>
                <td>No Borrower to show</td>
            </tr>)
        } else {
            // return <h1>Hello</h1>
            return users.map((user,key) => 
                <tr key={user.id}>
                    <td>{++key}</td>
                    <td>{ user.name }</td>
                    <td>{user.email}</td>
                    <td>{user.roles.map((role) => 
                        <span key={ role.id}>{role.name }</span>
                    )}</td>
                    {Auth.only("admin") ?
                    <td>
                    <Link  to={`users/${user.id}`} className="btn btn-outline-success">Detail</Link>
                    <Link to={`users/edit/${user.id}`} className="btn btn-outline-warning">Edit</Link>
                    <button onClick={
                        () => {
                            UserApi.deleteUser(user.id).then(() => {
                                fetchUsers()
                            }).catch((err) => {
                                console.log(err)
                            } )
                        }
                    } className="btn btn-outline-danger">Delete</button>
                </td> : ""
                }
                    
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
                            {Auth.only("admin")?
                            <div className="row justify-content-end mr-3"><Link to="/users/add" className="btn btn-primary">+ Register a user</Link></div>: ""
                    }
                        
                    
                       <table className="table table-striped mt-4">
                        <thead >
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role(s)</th>
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
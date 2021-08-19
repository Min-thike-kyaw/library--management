import Axios from "axios";
import React, { useState,useEffect,  } from "react";
import { Link,useHistory, useParams } from "react-router-dom";
import {  } from "react-router-dom";
import UserApi from "../../Api/UserApi";
import AppContainer from "../AppContainer";



const Edit = () => {
    const { id } = useParams();
    const history = useHistory()
    // const [user, setUser] = useState(null)
    const [name, setName] = useState(null);
    // const [categories_view, setCategoriesView] = useState(null);
    // const [categories, setCategories] = useState([]);
    const [email, setEmail] = useState()
    const [last_password, setLastPassword] = useState()
    const [password, setPassword] = useState(null)
    
    const [confirm_password, setConfirmPassword] = useState()
    const [roles, setRoles] = useState()
    const [role_name, setRoleName] = useState("librarian")
    // console.log(id)
    useEffect(() => {
        UserApi.getOneUser(id).then((res) => {
            // console.log(res.data)
            const user = res.data
            setName(user.name)
            setEmail(user.email)
            // console.log(user)
        })
    }, [])
    useEffect(() => {
        Axios.get("/api/roles").then((res) => {
            const data = res.data.data
            
            // console.log(data)
            setRoles(data);
        })
        
    }, [])
    
    

    const renderRoles = () => {
        if (roles == null) {
            return <option className="form-control" >No department to show</option>;
        } else {
            return roles.map((role) => 
                <option
                    key={role.id}
                    value={role.name} >{role.name !== "admin" ? role.name : role.name + "( user who can create another user)"}</option>
            )
        }
    }
    
    
    const handleSubmit = async () => {
        // alert(name+ " " + department_id + " " + " "+ sex + "" + phone_no + email)
        if (password == confirm_password) {
            // alert(role_name);
                try {
                    await UserApi.updateUser({
                        "name": name,
                        "password": password,
                        "email": email,
                        "role" : role_name
                    },id).then(
                        history.push('/users')
                    ).catch(error => {
                        console.log(error.response.data)
                    })
                // history.push('/borrowers');
                } catch {
                    alert("i feel something wrong")
                } finally {
                alert ("ok")   
                }
        } else if (password === "") {
            alert("password credential")
        } else {
            alert("password and confirm password do not match")
        }
    }
    
    return <AppContainer title="Register a user">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <form id="my-form">
                       
                        <div className="form-group">
                            <label>Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value )}
                                    className="form-control" />
                         </div>
                                
                        <div className="form-group">
                            <label>Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value )}
                                        className="form-control"
                                        
                                    />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value )}
                                        className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Confirm password</label>
                                    <input
                                        type="password"
                                        value={confirm_password}
                                        onChange={(e) => setConfirmPassword(e.target.value )}
                                        className="form-control" />
                                </div>
                        <div className="form-group">
                            <label>Select Role</label>
                                    <select
                                        value={role_name}
                                        onChange={(e)=> setRoleName(e.target.value)}
                                        className="form-control">

                                {renderRoles()}
                            </select>
                        </div>
                        <button className="btn btn-primary" onClick={handleSubmit} >Create</button>
                        <Link to="/books" className="btn btn-danger ml-2">Cancel</Link>
                                
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </AppContainer>
}


  
  
  
export default Edit;
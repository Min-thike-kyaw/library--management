import Axios from "axios";
// import { type } from "os";
import React, { useState,useEffect,  } from "react";
import { Link,useHistory } from "react-router-dom";

import UserApi from "../../Api/UserApi";
import Auth from "../../functions/Auth";
import AppContainer from "../AppContainer";



const Add = () => {
    const history = useHistory()
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState()
    const [confirm_password, setConfirmPassword] = useState()
    const [roles, setRoles] = useState()
    const [role_name, setRoleName] = useState("librarian")
    useEffect(() => {
        Axios.get("/api/roles").then((res) => {
            const data = res.data.data
            
            // console.log(data)
            setRoles(data);
        })
        
    }, [])
    
    

    const renderRoles = () => {
        if (roles == null) {
            return <option className="form-control" required>No department to show</option>;
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
                    await UserApi.addUser({
                        "name": name,
                        "password": password,
                        "email": email,
                        "role": role_name,
                        "user": user.getRole()
                    }).then(() => {

                        if (errors == []) {
                            console.log(errors)
                        }
                        console.log(errors)
                    }
                        //  history.push('/users')
                        
                    ).catch(error => {
                        // console.log(error.response.data.errors)
                        setErrors(error.response.data.errors)
                        
                        
                        
                        
                    })
                    
                // history.push('/borrowers');
                } catch {
                    alert("i feel something wrong")
                }
        } else if (password === "") {
            alert("password credential")
        } else {
            alert("password and confirm password do not match")
        }
    }
    const showErrors = () => {
        
        if (errors != []) {
            return Object.keys(errors).map((error) => (
                <li className="text-danger">{errors[error][0]}</li>      
            ))
         
            
        }
    }
    
    return <AppContainer title="Register a user">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                        <div id="my-form">
                                <ul>{showErrors()}</ul>
                        
                       
                        <div className="form-group">
                            <label>Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value )}
                                    className="form-control" required/>
                         </div>
                                
                        <div className="form-group">
                            <label>Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value )}
                                        className="form-control"
required                                        
                                    />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value )}
                                        className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Confirm password</label>
                                    <input
                                        type="password"
                                        value={confirm_password}
                                        onChange={(e) => setConfirmPassword(e.target.value )}
                                        className="form-control" required/>
                                </div>
                        <div className="form-group">
                            <label>Select Role</label>
                                    <select
                                        value={role_name}
                                        onChange={(e)=> setRoleName(e.target.value)}
                                        className="form-control">required

                                {renderRoles()}
                            </select>
                        </div>
                        <button className="btn btn-primary" onClick={handleSubmit} >Create</button>
                        <Link to="/books" className="btn btn-danger ml-2">Cancel</Link>
                                
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </AppContainer>
}


  
  
  
export default Add;
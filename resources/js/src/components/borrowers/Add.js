import React, { useState,useEffect,  } from "react";
import { Link,useHistory } from "react-router-dom";
import AuthorApi from "../../Api/AuthorApi";
import BookApi from "../../Api/BookApi";
import BorrowerApi from "../../Api/BorrowerApi";
import DepartmentApi from "../../Api/DepartmentApi";
import AppContainer from "../AppContainer";



const Add = () => {
    const history = useHistory()
    const [errors, setErrors] = useState([]);
    const [departments, setDepartments] = useState(null);
    // const [categories_view, setCategoriesView] = useState(null);
    // const [categories, setCategories] = useState([]);
    const [name, setName] = useState("")
    const [department_id, setDepartmentId] = useState(0)
    const [sex, setSex] = useState(1)
    const [email, setEmail] = useState("")
    const [phone_no, setPhoneNo] = useState(null)
    // const { id } = useParams();
    //     console.log(categories)
    // }
    useEffect(() => {
        DepartmentApi.getAllDepartments().then((res) => {
            const data = res.data.data
            setDepartments(data);
        })
        
    }, [])
    
    

    const renderDepartments = () => {
        if (departments == null) {
            return <option className="form-control" >No department to show</option>;
        } else {
            return departments.map((department) => 
                <option
                    key={department.id}
                    value={department.id} >{department.name}</option>
            )
        }
    }
    const showErrors = () => {
        
        if (errors != []) {
            return Object.keys(errors).map((error, index) => (
                <li className="text-danger">{errors[error][0]}</li>      
            ))
         
            
        }
    }
    
    const handleSubmit = async () => {
        // alert(name+ " " + department_id + " " + " "+ sex + "" + phone_no + email)
        try {
            await BorrowerApi.addBorrower({
                "name" : name,
                "department_id": department_id,
                "email": email,
                "sex" : sex,
                "phone_no": phone_no,    
            }).then(
                history.push('/borrowers')
            ).catch(error => {
                        setErrors(error.response.data.errors)
                        console.log(error.response.data)
            })
        // history.push('/borrowers');
        } catch {
            alert("i feel something wrong")
        } finally {
         alert ("ok")   
        }
    }
    
    return <AppContainer title="Add a member">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                            <form id="my-form">
                                {showErrors()}
                       
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
                                        className="form-control" />
                                </div>
                                
                        <div className="form-group">
                            <label>Select department</label>
                                    <select
                                        value={department_id}
                                    
                                        onChange={(e)=> setDepartmentId(e.target.value)}
                                        className="form-control">
                                        <option>Choose department</option>
                                {renderDepartments()}
                              
                            </select>
            
                        </div>
                        <div className="form-group" >
                            <label>select sex</label>
                            
                                    <select
                                        value={sex}
                                        onChange={(e) => setSex(e.target.value )}
                                        className="form-control">
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                            
                            </div>
                                <div className="form-group">
                                    <label>Phone number</label>
                                    <input
                                        // type="number"
                                        value={phone_no}
                                        onChange={(e) => setPhoneNo(e.target.value )}
                                        className="form-control" />
                        </div>
                        <button className="btn btn-primary" onClick={handleSubmit} >Edit</button>
                        <Link to="/books" className="btn btn-danger ml-2">Create</Link>
                                
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </AppContainer>
}


  
  
  
export default Add;
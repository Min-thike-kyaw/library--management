import React, { useState,useEffect,  } from "react";
import { Link,useHistory,useParams } from "react-router-dom";

import BorrowerApi from "../../Api/BorrowerApi";
import AppContainer from "../AppContainer";



const Detail = () => {
    
    
    // const [categories_view, setCategoriesView] = useState(null);
    // const [categories, setCategories] = useState([]);
    const [name, setName] = useState("")
    // const [borrower, setBorrower] = useState()
    const [unique_id, setUniqueId] = useState()
    const [department, setDepartment] = useState(0)
    const [sex, setSex] = useState(1)
    const [email, setEmail] = useState("")
    const [phone_no, setPhoneNo] = useState(null)
    const [created_at, setCreated_at] = useState()
    const { id } = useParams();
    //     console.log(categories)
    // }
    
    useEffect(() => {
        
        BorrowerApi.getOneBorrower(id).then((res) => {

            const data = res.data.data
            console.log(data)
            // setBorrower(data)
            setName(data.name)
            setEmail(data.email)
            setPhoneNo(data.phone_no)
            setSex(data.sex)
            setUniqueId(data.unique_id)
            setDepartment(data.department)
            setCreated_at(data.created_at)
        })
    }, [])
    
    

    
     
    
    return <AppContainer title="Member Detail">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header"><h3>{ name}</h3></div>
                <div className="card-body">
                            <form id="my-form">
                                <p>Unique Id: {unique_id}</p>
                                <p>Email : {email}</p>
                                <p>Phone no : {phone_no}</p>
                                <p>sex : {sex == 2? "female": "male"}</p>
                                <p>Department : {department.name}</p>
                                <p>{name} was a member at { created_at}</p>
                                <Link to="/books" className="btn btn-danger ml-2">Back</Link>
                                <Link to={`borrowers/edit/${id}`} className="btn btn-outline-warning">Edit</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </AppContainer>
}


  
  
  
export default Detail;
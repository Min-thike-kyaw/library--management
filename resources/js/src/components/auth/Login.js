// import { async } from 'q';
import Axios from 'axios';
import React,{useState} from 'react'
// import { Alert } from 'react-bootstrap';
// import { Alert } from 'react-bootstrap';
import NavBar from '../NavBar';
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom';



const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory()
    // localStorage.clear();

    const logIn = async () => {
        try {
        
            await Axios.post("api/login", ({
                "email": email,
                "password": password
            })).then((res) => {
                const token = res.data.token
                
                Cookies.set('Authorization', token, { expires: 7 })

                Cookies.set('Auth_User', JSON.stringify(res.data.user), { expires: 7 })
                history.push('/books')
                
            }).catch((err) => {
                console.log(err)
            })
            // console.log("hello")
        } catch {
            alert("something wrong");
        }
    }
    return (

        <div>
            <NavBar />
            <div className="container">
    <div className="row justify-content-center mt-5">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">Login</div>

                <div className="card-body">
                    

                        <div className="form-group row">
                            <label className="col-md-4 col-form-label text-md-right">Email</label>

                            <div className="col-md-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email" required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                            />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-md-4 col-form-label text-md-right">Password</label>

                            <div className="col-md-6">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password" required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />

                                
                            </div>
                        </div>

                        

                        <div className="form-group row mb-0">
                            <div className="col-md-8 offset-md-4">
                            <button className="btn btn-primary" onClick={logIn} >Login</button>
                                <button type="submit" className="btn btn-white">
                                    Cancel
                                </button>

                                
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
</div> 

        </div>
    )
}
export default Login;
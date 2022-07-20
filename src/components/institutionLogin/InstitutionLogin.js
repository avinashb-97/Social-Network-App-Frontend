import { Link, Navigate, useNavigate } from 'react-router-dom';
import './insLogin.css';
import { useState } from 'react';
import Axios from 'axios';
import Constant from '../../constants/Constant';
import AuthService from '../../services/AuthService';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InstitutionLogin = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({email:"", password:""});

    const login_url = Constant.base_url+"login";
    
    const handleUpdate = (e) =>{
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post(login_url, data)
        .then(res => {
            const token = res.headers.authorization;
            AuthService.login(token);
            navigate("/institution/home");
        })
        .catch(res => {
            console.log(res);
        })
    }

    return (
        <div className="content">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-6 contents">
                <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-block position-relative">
                        
                    <Link to="/" className='mb-2 position-absolute arrow-position'>
                        <span><FontAwesomeIcon icon={faLeftLong} color='black' className='photo-text'></FontAwesomeIcon></span>
                    </Link>
                    <div className="mb-4">
                        <h3>Institution Login</h3>
                    </div>

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" autoComplete='off' onChange={(e) => handleUpdate(e)}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" onChange={(e) => handleUpdate(e)}/>
                        </div>
                        
                        <div className="mb-4 mt-2">
                            <label><span className="caption">Remember me</span>
                                <input type="checkbox" defaultChecked/>
                                <div className="control__indicator"></div>
                            </label>
                            
                            <span className='float-end'><a href="#" className="">Forgot Password</a></span> 
                        </div>

                        <input type="submit" value="Log In" className="btn btn-pill text-white btn-block btn-primary set-mid" />
                        <Link to="/institution/create" className='mt-4'> Sign up here</Link>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default InstitutionLogin;
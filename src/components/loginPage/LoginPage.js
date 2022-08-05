
import './loginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuildingColumns, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthService from '../../services/AuthService';
import Constant from '../../constants/Constant';
import Axios from 'axios';

const LoginPage = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({email:"", password:""});
    
    const login_url = Constant.base_url+"login";

    useEffect(() => {
        if(AuthService.isLoggedIn(Constant.userTypes.ADMIN))
        {
            navigate("/institution/home");
        }
        if(AuthService.isLoggedIn(Constant.userTypes.USER))
        {
            navigate("/home");
        }
    },[])


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
            AuthService.login(token, Constant.userTypes.USER);
            navigate("/home");
        })
        .catch(res => {
            console.log(res);
        })
    }

    return (
        <div className="container-fluid login-page">
            <div className="row">
                <div className="col-lg-6 col-md-6 d-none d-md-block infinity-image-container-login"></div>
                <div className="col-lg-6 col-md-6 infinity-form-container">
                    <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
                        <div className="text-center mb-3 mt-5">
                            {/* <img src={image} width="150px"/> */}
                            <h1 className='sn-title'>Social Network</h1>
                        </div>
                        <div className="text-center mb-4">
                    <h4>Already have an account ?</h4>
                </div>
                        <form className="px-3" onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faEnvelope} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="email" id='email' placeholder="Email Address" tabIndex="10" onChange={(e) => handleUpdate(e)} required/>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faLock} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="password" id='password' name="" placeholder="Password" onChange={(e) => handleUpdate(e)} required/>
                            </div>
                        <div className="row mb-5">
                            <div className="">
                                <input type="checkbox" className="" id="cb1"/>
                                <label className="custom-control-label" htmlFor="cb1">Remember me</label>
                                <a href="reset.html" className="forget-link float-end">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mb-3"> 
                                <button type="submit" className="btn btn-block login-btn">Login</button>
                        </div>
                        <div className="text-center mt-5 mb-5">Don't have an account? 
                            <Link to="/register"> Register here</Link>
                        </div>
                        </form>
                        <div className='d-flex space-between'>    
                            <Link to="/institution" className="btn btn-secondary btn-effect m-auto">
                                <span className='m-2'><FontAwesomeIcon icon={faBuildingColumns} color='white' className='photo-text'></FontAwesomeIcon></span>
                                Login as Institution
                            </Link>
                            
                            <Link to="/" className="btn btn-secondary btn-effect m-auto">
                                <span className='m-2'><FontAwesomeIcon icon={faBriefcase} color='white' className='photo-text'></FontAwesomeIcon></span>
                                Login as Recruiter
                            </Link>
                        </div>
                        
                    </div>		
                </div>
                
            </div>
	    </div>
    );
}

export default LoginPage;
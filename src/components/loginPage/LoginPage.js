
import './loginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuildingColumns, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const LoginPage = () => {
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
                        <form className="px-3">
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faEnvelope} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="email" name="" placeholder="Email Address" tabIndex="10"required/>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faLock} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="password" name="" placeholder="Password" required/>
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

import './loginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faKey, faBuildingColumns, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className="container-fluid login-page">
            <div className="row">
                <div className="col-lg-6 col-md-6 d-none d-md-block infinity-image-container-register"></div>
                <div className="col-lg-6 col-md-6 infinity-form-container">
                    <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
                        <div className="text-center mb-3 mt-5">
                            <h1 className='sn-title'>Social Network</h1>
                        </div>
                        <div className="text-center mb-4">
                    <h4>Create your new account here !</h4>
                </div>
                        <form className="px-3">
                            
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faUser} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="email" name="" placeholder="Full name" tabIndex="10"required/>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faEnvelope} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="email" name="" placeholder="Email Address" tabIndex="10"required/>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faLock} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="password" name="" placeholder="Password" required/>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faLock} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="password" name="" placeholder="Confirm Password" required/>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faBuildingColumns} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <select> 
                                    <option name="select">Please select your University</option>
                                    <option name="male"> Queen Mary University of London</option>
                                    <option name="female"> University of Surrey </option>
                                </select>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faBuilding} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <select> 
                                    <option name="select">Please select your Department</option>
                                    <option name="male"> Queen Mary University of London</option>
                                    <option name="female"> University of Surrey </option>
                                </select>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faKey} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="text" name="" placeholder="University Share Code" required/>
                            </div>
                            <div className="row mb-3">
                   
                        </div>
                        <div className="mb-3"> 
                                <button type="submit" className="btn btn-block login-btn">Register</button>
                        </div>
                            
                            <div className="text-center mb-5">Already have an account?  
                                <Link to="/"> Login here</Link>
                             </div>
                        </form>
                    </div>		
                </div>
            </div>
	    </div>
    );
}

export default RegisterPage;
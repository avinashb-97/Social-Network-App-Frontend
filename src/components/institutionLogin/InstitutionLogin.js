import { Link } from 'react-router-dom';
import './insLogin.css';

const InstitutionLogin = () => {
    return (
        <div class="content">
        <div class="container">
            <div class="row justify-content-center">
            <div class="col-md-6 contents">
                <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="form-block">
                        <div class="mb-4">
                        <h3>Institution Login</h3>
                    </div>
                    <form action="#" method="post">
                        <div>
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="username"/>
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password"/>
                        </div>
                        
                        <div class="mb-4 mt-2">
                            <label><span class="caption">Remember me</span>
                                <input type="checkbox" checked="checked"/>
                                <div class="control__indicator"></div>
                            </label>
                            
                            <span className='float-end'><a href="#" class="">Forgot Password</a></span> 
                        </div>

                        <input type="submit" value="Log In" class="btn btn-pill text-white btn-block btn-primary set-mid" />
                        <Link to="/institution/create" > Sign up here</Link>
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
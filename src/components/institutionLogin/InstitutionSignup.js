import { Link } from 'react-router-dom';
import AlertBox from '../utils/AlertBox';
import './insLogin.css';
import { useState } from 'react';
import Axios from 'axios';


const InstitutionSignup = () => {

    const [show, setShow] = useState(false);

    const [data, setData] = useState({name:"", adminMail:"", password:"", confirmPassword:""})

    const url = "http://localhost:8081/api/institute/create"

    const handleUpdate = (e) =>{
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.password != data.confirmPassword)
        {
            setShow(true);
            return;
        }
        Axios.post(url, data)
        .then(res => {
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
                    <div className="form-block">
                        <div className="mb-4">
                        <h3>Institution Signup</h3>
                    </div>
                    {show && <AlertBox variant="warning" message="Passwords do not match"/>}
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label htmlFor="name">Institution Name</label>
                            <input onChange={(e) => handleUpdate(e)} type="text" className="form-control" id="name"/>
                        </div>
                        <div>
                            <label htmlFor="adminMail">Admin Email</label>
                            <input onChange={(e) => handleUpdate(e)} type="text" className="form-control" id="adminMail"/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onChange={(e) => handleUpdate(e)} type="password" className="form-control" id="password"/>
                        </div>
                        
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input onChange={(e) => handleUpdate(e)} type="password" className="form-control" id="confirmPassword"/>
                        </div>
                        

                        <input type="submit" value="Register" className="btn btn-pill text-white btn-block btn-primary set-mid mt-4"/>
                        <Link to="/institution"  className='mt-4'> Already have account? Login Here</Link>

                 
                    </form>
                    </div>
                    
                </div>
                </div>
            </div>
            </div>
        </div>

        </div>
    );
}

export default InstitutionSignup;
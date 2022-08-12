
import { useState, useEffect, useRef } from 'react';
import Constant from '../../constants/Constant';
import Header from '../Header';
import AlertBox from '../utils/AlertBox';
import AuthService from '../../services/AuthService';
import Axios from 'axios';

const ChangePassword = () => {


    const [currPassword, setCurrPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [showalert, setShowalert] = useState(false);

    const userUrl = Constant.base_url+"api/user/changepassword";

    const changepassword = () => {
        
        if(newPassword != conPassword)
        {
            return;
        }
        const token = AuthService.getCurrentUserToken();
        Axios.defaults.headers.common['Authorization'] = token;
        
        Axios.put(userUrl, formData)
        .then(res => {
            console.log(res.data);
            setButtonClick(!buttonclick);
        })
        .catch(res => {
            console.log(res);
        })
    }

    return (
        <div style={{overflow:'hidden'}}>
            <Header currElement={''}/>
            <div className="container-fluid main-body-bg">
            <div className="row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm">
                    <div className='bg-white m-5 p-5 '>
                        <div className='p-5'>
                            
                        {showalert && <AlertBox variant={'success'} message={'Password successfully changed'}/>}
                        <form>
                        <div class="form-group mt-3">
                            <label for="exampleInputPassword1">Current Password</label>
                            <input type="password" class="form-control" onChange={(e) => setCurrPassword(e.target.value)} id="exampleInputPassword1" placeholder="Current Password"/>
                        </div>
                        
                        <div class="form-group mt-3">
                            <label for="exampleInputPassword1">New Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setNewPassword(e.target.value)}  placeholder="New Password"/>
                        </div>
                        
                        <div class="form-group mt-3">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setConPassword(e.target.value)}  placeholder="Confirm Password"/>
                        </div>
                        <div className='text-center mt-5'>
                            
                            <button type="submit" class="btn btn-primary text-center" onClick={changepassword}>Change Password</button>
                        </div>
                        </form>

                        </div>
                    </div>
                    
                </div>
                <div className="col-sm-2">
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default ChangePassword;
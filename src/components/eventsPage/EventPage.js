import Body from "../body/Body";
import Header from "../Header";
import { useState, useEffect } from 'react';
import Axios from "axios";
import AuthService from "../../services/AuthService";
import Constant from "../../constants/Constant";

const EventPage = () => {

    // const [userData, setUserData] = useState({name:"User Name", email:"user@mail.com"});
    // const userUrl = Constant.base_url+"api/user";


    // useEffect(() => {
    //     const token = AuthService.getCurrentUserToken();
    //     Axios.defaults.headers.common['Authorization'] = token;
    //     Axios.get(userUrl)
    //     .then(res => {
    //         setUserData(res.data);
    //     })
    //     .catch(res => {
    //         console.log(res);
    //     })
    // },[]);

    return (
        <div style={{overflow:'hidden'}}>
            <Header currElement={'events'}/>
        </div>
    );
}

export default EventPage;
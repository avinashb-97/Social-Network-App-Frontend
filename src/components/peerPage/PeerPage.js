import Body from "../body/Body";
import Header from "../Header";
import { useState, useEffect } from 'react';
import Axios from "axios";
import AuthService from "../../services/AuthService";
import Constant from "../../constants/Constant";
import ContactCard from "./ContactCard";
import CourseCard from "./CourseCard";

const PeerPage = () => {

    const [peerData, setPeerData] = useState([]);
    const peerUrl = Constant.base_url+"api/department/peers";


    useEffect(() => {
        const token = AuthService.getCurrentUserToken();
        Axios.defaults.headers.common['Authorization'] = token;
        Axios.get(peerUrl)
        .then(res => {
            setPeerData(res.data.courses);
        })
        .catch(res => {
            console.log(res);
        })
    },[]);

    return (
        <div style={{overflow:'hidden'}}>
            <Header currElement={'peers'}/>
            <div className="container-fluid main-body-bg">
            <div className="row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm">
                    { 
                        peerData.map((course) => {
                            return <CourseCard key={course.id} course={course}/>
                        }) 
                    }
                </div>
                <div className="col-sm-2">
                </div>
            </div>
        </div>
        </div>
    );
}

export default PeerPage;
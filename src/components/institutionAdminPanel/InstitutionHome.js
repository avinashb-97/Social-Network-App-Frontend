import SideNav from "./SideNav";
import NavBar from "./NavBar";
import './insHome.css';
import { useState, useEffect } from "react";
import ContentContainer from "./ContentContainer";
import Constant from '../../constants/Constant';
import Axios from 'axios';
import AuthService from '../../services/AuthService';

const InstitutionHome = () =>
{   
    const sideMenu = Constant.instituteSideMenu;
    const [activeMenu, setActiveMenu] = useState(sideMenu[0]);
    const [insData, setInsData] = useState([]);

    const url = Constant.base_url+"api/institute/current";

    useEffect(() => {
        const token = AuthService.getCurrentUserToken();
        Axios.defaults.headers.common['Authorization'] = token;
        Axios.get(url)
        .then(res => {
            setInsData(res.data);
            console.log(res.data);
        })
        .catch(res => {
            console.log(res);
        })
    },[]);

    const changeActiveButton = (e) => {
        const id = e.target.id;
        setActiveMenu(id);
    }

    return (

        <div>
            <NavBar institute={insData} />
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                                <SideNav menuList={sideMenu} currentMenu={activeMenu} onClickMenu={changeActiveButton} institute={insData}/>
                        </nav>
                        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                            {/* <h1 className="h2">{activeMenu}</h1>
                            <div className="container-fluid bg-white dash-board">
                                <div className="p-3">     */}
                                    <ContentContainer activeMenu={activeMenu}/>
                                {/* </div>
                            </div> */}
                        </main>
                    </div>
                    
                </div>
        </div>
    )
}

export default InstitutionHome;
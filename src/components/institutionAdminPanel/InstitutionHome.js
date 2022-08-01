import SideNav from "./SideNav";
import NavBar from "./NavBar";
import './insHome.css';
import { useState } from "react";
import ContentContainer from "./ContentContainer";
import Constant from "../../constants/Constant";

const InstitutionHome = () =>
{   
    const sideMenu = Constant.instituteSideMenu;
    const [activeMenu, setActiveMenu] = useState(sideMenu[0]);

    const changeActiveButton = (e) => {
        const id = e.target.id;
        setActiveMenu(id);
    }

    return (

        <div>
            <NavBar />
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                                <SideNav menuList={sideMenu} currentMenu={activeMenu} onClickMenu={changeActiveButton}/>
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
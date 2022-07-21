import SideNav from "./SideNav";
import NavBar from "./NavBar";
import './insHome.css';
import { useState } from "react";
import StudentApprovals from "./StudentApprovals";
import Departments from "./Departments";

const InstitutionHome = () =>
{
    
    
    const sideMenu = [ "Student Approvals", "Departments", "Courses", "Modules", "Students", "Staffs"];
    const [activeMenu, setActiveMenu] = useState(sideMenu[0]);
    
    const studentApproval = () => {
        
    }
    const departments = () => {
        
    }
    const courses = () => {
        
    }
    const modules = () => {
        
    }
    const students = () => {
        
    }
    const staffs = () => {
        
    }

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
                            <h1 className="h2">{activeMenu}</h1>
                            <div className="container-fluid bg-white dash-board">
                                <div className="p-3">    
                                    {activeMenu == sideMenu[0] && <StudentApprovals/>}
                                    {activeMenu == sideMenu[1] && <Departments/>}
                                </div>
                            </div>
                        </main>
                    </div>
                    
                </div>
                

                
        </div>
    )
}

export default InstitutionHome;
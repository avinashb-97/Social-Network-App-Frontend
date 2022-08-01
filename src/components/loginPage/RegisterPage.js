
import './loginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faKey, faBuildingColumns, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Constant from '../../constants/Constant';

const RegisterPage = () => {

    const [institutions, setInstitutions] = useState([]);
    const [departments, setDepartments] = useState([]);

    const [departmentId, setDepartmentId] = useState(-1);
    const [courseId, setCoursId] = useState(-1);
    const [instituteId, setInstituteId] = useState(-1);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [sharecode, setSharecode] = useState("");

    const institutionUrl = Constant.base_url+"api/institute";

    useEffect(() => {

        Axios.get(institutionUrl)
        .then(res => {
            setInstitutions(res.data);
        })
        .catch(res => {
            console.log(res);
        })
    },[]);

    const handleSelectChange = (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const id =  el.getAttribute('id'); 
        if(id == "0")
        {
            setDepartments([]);
            setInstituteId(-1);
            return;
        }
        setInstituteId(id);
        const currInstitute = institutions.filter((institution) => institution.id == id)[0];
        setDepartments(currInstitute.departments);
    }

    const handeCourseChange = (id) => {
        setCoursId(id);
    }

    const handleDepartmentChange = (id) => {
        setDepartmentId(id);
    }

    const updateName = (e) => {
        const val = e.target.value;
        setName(val);
    }

    const updateMail = (e) => {
        const val = e.target.value;
        setMail(val);
    }

    const updatePassword = (e) => {
        const val = e.target.value;
        setPassword(val);
        e.target.setCustomValidity("");
        if(val.length < 8)
        {
            e.target.setCustomValidity("Password should be atleast 8 characters long");
        }

        const confirmPass = document.getElementById("confirmPassword");
        if(val != confirmPassword)
        {
            confirmPass.setCustomValidity('Passwords do not match');
        }
    }

    const updateConfirmPassword = (e) => {
        const val = e.target.value;
        setConfirmPassword(val);
        e.target.setCustomValidity("");
        if(password !== val)
        {
            e.target.setCustomValidity('Passwords do not match');
            return;
        }
        
    }

    const updateSharecode = (e) => {
        const val = e.target.value;
        setSharecode(val);
    }

    const registerUser = (event) => {
        event.preventDefault();
        
        const confirm = document.getElementById("confirmPassword");
        
        console.log(password+"   "+ confirmPassword);
        if(password !== confirmPassword)
        {
            return;
        }
        
        console.log(name+" "+mail+" "+password+" "+sharecode+" "+instituteId+" "+departmentId+" "+courseId);
    }

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
                        <form className="px-3" onSubmit={(e)=> registerUser(e)}>
                            
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faUser} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="text" name="" onChange={(e) => updateName(e)} placeholder="Full name" tabIndex="10" required/>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faEnvelope} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="email" name="" onChange={(e) => updateMail(e)} placeholder="Email Address" tabIndex="10"required/>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faLock} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="password" onChange={(e) => updatePassword(e)} name="" placeholder="Password" required/>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faLock} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="password" id='confirmPassword' onChange={(e) => updateConfirmPassword(e)} placeholder="Confirm Password" required/>
                            </div>
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faBuildingColumns} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <select onChange={(e) => handleSelectChange(e)}> 
                                    <option name="select university" id="0">Please select your University</option>
                                    {
                                        institutions.map((institution) => {
                                            return <option key={institution.id} id={institution.id}>{institution.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            { departments.length != 0 && <RegisterDepartmentList departments={departments} onDepartmentChange={handleDepartmentChange} onCourseChange={handeCourseChange} />}
                            <div className="form-input">
                                <span><FontAwesomeIcon icon={faKey} color='grey' className='photo-text'></FontAwesomeIcon></span>
                                <input type="text" name="" onChange={(e) => updateSharecode(e)} placeholder="University Share Code" required/>
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

const RegisterDepartmentList = ({departments, onDepartmentChange, onCourseChange}) => {

    const [courses, setCourses] = useState([]);

    const handleSelectChange = (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const id =  el.getAttribute('id'); 
        if(id == "0")
        {
            onDepartmentChange(-1);
            setCourses([]);
            return;
        }
        onDepartmentChange(id);
        const currDepartment = departments.filter((department) => department.id == id)[0];
        setCourses(currDepartment.courses);
    }

    return (
        <div>
            <div className="form-input">
                <span><FontAwesomeIcon icon={faBuilding} color='grey' className='photo-text'></FontAwesomeIcon></span>
                <select onChange={(e) => handleSelectChange(e)}> 
                    <option name="select" id="0">Please select your Department</option>
                    {
                        departments.map((department) => {
                            return <option key={department.id} name={department.name} id={department.id}>{department.name}</option>
                        })
                    }
                </select>
            </div>
            { courses.length != 0 && <RegisterCourseList courses={courses} onCourseChange={onCourseChange}/>}
        </div>
    );
}

const RegisterCourseList = ({courses, onCourseChange}) => {


    const handleSelectChange = (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const id =  el.getAttribute('id'); 
        if(id == "0")
        {
            onCourseChange(-1);
            return;
        }
        onCourseChange(id);
    }

    return (
        <div className="form-input">
            <span><FontAwesomeIcon icon={faBuilding} color='grey' className='photo-text'></FontAwesomeIcon></span>
            <select onChange={(e) => handleSelectChange(e)}> 
                <option name="select">Please select your Course</option>
                {
                    courses.map((course) => {
                        return <option key={course.id} name={course.name} id={course.id}>{course.name}</option>
                    })
                }
            </select>
        </div>
    );

}

export default RegisterPage;
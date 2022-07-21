import Table from 'react-bootstrap/Table';
import './insHome.css';
import DialogBox from '../utils/DialogBox';
import FormDialogBox from '../utils/FormDialogBox';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const Departments = () => {

    const [showDialog, setShowDialog] = useState(false);
    const [showFormDialog, setShowFormDialog] = useState(false);
    const [deleteId, setDeleteId] = useState(-1);
    const [departments, setDepartments] = useState({1:"Computer Science", 2:"Medical"});
    const [departmentName, setDepartmentName] = useState("");

    const dialogHeading = "Confirm Delete Department ?"
    const dialogContent = "Deleting the department deletes all the students and contents associated with it. Do you want to continue ?"

    const handleDelete = (e) => {
        setDeleteId(e.target.id);
        setShowDialog(true);
    }

    const handleDialogContinue = () => {
        const currDepartment = departments;
        delete currDepartment[deleteId];
        setDepartments(currDepartment);
        handleDialogClose();
    }

    const handleDialogClose = () => {
        setShowDialog(false);
        setDeleteId(-1);
    }

    const handleCloseFormDialog = () => {
        setShowFormDialog(false);
        setDepartmentName("");
    }

    const openFormDialog = () => {
        setShowFormDialog(true);
    }

    const handleDepartmentChange = (e) => {
        setDepartmentName(e.target.value);
    }

    const handleCreateDepartment = () => {
        if(departmentName != "")
        {    
            console.log(departmentName);
            handleCloseFormDialog();    
        }
        setDepartmentName("");    
    }

    return (
        <div className=''>
            <div className='float-end mb-3'>
                <button className='btn btn-primary' onClick={openFormDialog}>Add New Department</button>
            </div>
            {showDialog && <DialogBox heading={dialogHeading} content={dialogContent} handleContinueAction={handleDialogContinue} handleCloseAction={handleDialogClose}/>}
            <Dialog open={showFormDialog} onClose={handleCloseFormDialog} fullWidth>
                <DialogTitle>Create Department</DialogTitle>
                <DialogContent>
                <TextField autoFocus margin="dense" id="name" label="Department Name" type="text" fullWidth variant="standard" autoComplete='off' value={departmentName} onChange={(e) => handleDepartmentChange(e)} />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseFormDialog}>Cancel</Button>
                <Button onClick={handleCreateDepartment}>Create</Button>
                </DialogActions>
            </Dialog>
            <Table striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Department Name</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(departments).map((key, index) => {
                            return (  
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{departments[key]}</td>
                                    <td>
                                        <button className='btn btn-secondary' id={key}>Edit</button>
                                        <button className='btn btn-danger dep-btn' onClick={handleDelete} id={key}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Departments;
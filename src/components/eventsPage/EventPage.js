import Header from "../Header";
import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Form from 'react-bootstrap/Form';
import MenuItem from '@mui/material/MenuItem';
import Constant from '../../constants/Constant';
import Axios from 'axios';
import AuthService from '../../services/AuthService';
import EventCard from "./EventCard";

const EventPage = () => {

    const eventUrl = Constant.base_url+"api/event";

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const token = AuthService.getCurrentUserToken();
        Axios.defaults.headers.common['Authorization'] = token;
        Axios.get(eventUrl)
        .then(res => {
            setEventData(res.data);
        })
        .catch(res => {
            console.log(res);
        })
    },[]);

    const [time, setTime] = useState(new Date());

    const eventVisibility = [
        {
          value: 'DEPARTMENT',
          label: 'Department',
        },
        {
          value: 'UNIVERSITY',
          label: 'University',
        },
        {
          value: 'EVERYONE',
          label: 'Everyone',
        }
    ];

    const handleSelectChange = (event) => {
        setVisibility(event.target.value);
      };

    const handleTimeChange = (newValue) => {
        setTime(newValue);
        setTimeError(false);
    };
  
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setTime(new Date());
        setShow(true);
    }

    const [eventName, setEventName] = useState("");
    const [place, setPlace] = useState("");
    const [description, setDescription] = useState("");
    const [visibility, setVisibility] = useState('DEPARTMENT');
    const [image, setImage] = useState(null);
    const fileInputRef = useRef();

    const [eventError, setEventError] = useState(false);
    const [placeError, setPlaceError] = useState(false);
    const [descError, setDescError] = useState(false);
    const [timeError, setTimeError] = useState(false);

    const handleEventName = (e) => {
        const val = e.target.value;
        setEventName(val);
        setEventError(false);
    }

    const handlePlace = (e) => {
        const val = e.target.value;
        setPlace(val);
        setPlaceError(false);
    }

    const handleDescription = (e) => {
        const val = e.target.value;
        setDescription(val);
        setDescError(false);
    }

    const createEvent = () => {
        let err = false;
        if(eventName === "")
        {
            setEventError(true);
            err = true;
        }
        if(place === "")
        {
            setPlaceError(true);
            err = true;
        }
        if(description === "")
        {
            setDescError(true);
            err = true;
        }
        if(time < new Date())
        {
            setTimeError(true);
            err = true;
        }
        if(err) 
        {
            return;
        }
       
        const formData = new FormData();
        formData.append("name",eventName);
        formData.append("place",place);
        formData.append("desc",description);
        formData.append("eventTime",time);
        formData.append("visibility",visibility);
        formData.append("image", image);

        const token = AuthService.getCurrentUserToken();
        Axios.defaults.headers.common['Authorization'] = token;
        Axios.post(eventUrl, formData)
        .then(res => {
            const newEvent = res.data;
            setEventData([...eventData, newEvent]);
        })
        .catch(res => {
            console.log(res);
        })
        handleClose();
    }

    const handleClose = () => {
        setShow(false);
        setEventName("");
        setPlace("");
        setDescription("");
        setEventError(false);
        setDescError(false);
        setPlaceError(false);
        setTimeError(false);
        setVisibility('DEPARTMENT');
        setTime(new Date());
        removeImage();
    }

    const removeImage = () => {
        fileInputRef.current.value = "";
        setImage(null);
    }

    const handleChangeImage = (event) =>{
        const file = event.target.files[0];
        setImage(file);
    }

    return (
        <div style={{overflow:'hidden'}}>
            <Header currElement={'events'}/>
            <div className="container-fluid main-body-bg">
            <div className="row">
                <div className="col-sm-3">
                </div>
                <div className="col-sm">
                    <div className="mt-3 position-relative float-end">
                        <Button variant="primary" onClick={handleShow}>
                            Create New Event
                        </Button>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>Create New Event</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="input-group mb-3">
                                    <TextField id="outlined-basic" className="w-100" label="Event Name" error={eventError} autoComplete='off' variant="outlined" onChange={(e) => handleEventName(e)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <TextField id="outlined-basic" className="w-100" label="Place"  error={placeError}  autoComplete='off' variant="outlined" onChange={(e) => handlePlace(e)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DateTimePicker label="Event Start Date and Time" value={time}  onChange={handleTimeChange} renderInput={(params) => <TextField className="w-100" {...params} error={timeError} />} />
                                    </LocalizationProvider>
                                </div>
                                <div className="input-group mb-3">
                                    <TextField id="outlined-multiline-static" className="w-100" error={descError}  autoComplete='off' label="Description" multiline rows={5} onChange={(e) => handleDescription(e)}/>
                                </div>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Event Icon</Form.Label>
                                    <Form.Control type="file" multiple={false} ref={fileInputRef} onChange={(e) => handleChangeImage(e)} accept="image/*" />
                                </Form.Group>
                                <TextField id="outlined-select-currency" fullWidth select label="Open to" value={visibility} onChange={handleSelectChange} >
                                        {eventVisibility.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                </TextField>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={createEvent}>Submit</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div style={{marginTop:'80px'}}>
                            {
                                eventData.map((event) => {
                                    return <EventCard event={event}/>
                                })
                            }
                        </div>
                </div>
                <div className="col-sm-3">
                </div>
            </div>
        </div>
        </div>
    );
}

export default EventPage;
import './addContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import Tooltip from '@mui/material/Tooltip';

const AddContent = ({onAddContent}) => {

    const [contentText, setContentText] = useState("");

    const [imageHolder, setImageHolder] = useState("Add Image");
    const [image, setImage] = useState(null);

    const fileInputRef = useRef();
    const textAreaRef = useRef();
  
    const handleChangeImage = (event) =>{

        const file = event.target.files[0];
        let fileNameFull = file.name;
        let fileName = fileNameFull.split(".")[0];
        let format = fileNameFull.split(".").pop();
        fileName = fileName.length <= 15 ? fileName : fileName.substring(0,15)+"... ";
        fileNameFull = fileName+"."+format;
        setImageHolder(fileNameFull);
        const image = URL.createObjectURL(file);
        setImage(file);
    }

    const handleKeyDown = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight+20}px`;
        const text = e.target.value;
        setContentText(text);
    }

    const addContent = () => {
        if(contentText.trim() === "")
        {
            textAreaRef.current.focus();
            return;
        }
        onAddContent(contentText.trim(), image);
        setContentText("");
        textAreaRef.current.style.height = 'inherit';
        textAreaRef.current.style.height = '80px';
        removeImage();
    }

    const removeImage = () => {
        fileInputRef.current.value = "";
        setImage(null);
        setImageHolder("Add Image");
    }

    return (
        <div className="share border bg-white rounded shadow mt-4">
            <div className="d-flex flex-row inputs p-2 py-4">
                <textarea className="border-0 form-control share-input" id="content" value={contentText} ref={textAreaRef} onChange={(event) => handleKeyDown(event)} cols="40" rows="2" placeholder='Share your thoughts'></textarea>
                </div>
            <div className="d-flex flex-row justify-content-between border-top">
                <div className="d-flex flex-row publish-options">
                    <div className="d-flex align-items-center border-right p-2 share">
                        <div onClick={()=>fileInputRef.current.click()}>
                            <FontAwesomeIcon icon={faCameraAlt} swapOpacity color='grey' className='photo-text' ></FontAwesomeIcon>
                            <span className="photo-text" >{imageHolder}</span>
                        </div>
                        {image != null &&  <Tooltip title="Remove Image" arrow><FontAwesomeIcon icon={faXmark} className='cross-mark' onClick={removeImage}/></Tooltip>}
                        <input onChange={handleChangeImage} multiple={false} ref={fileInputRef} accept="image/*" type='file'hidden/>
                    </div>
                </div>
                <div className="publish-button" id="publish-button" onClick={addContent} >
                    <div className="align-items-center border-left p-2 px-5 btn publish">
                        <span className="ml-1" >Publish</span></div>
                </div>
            </div>
        </div>
    );
}

export default AddContent;
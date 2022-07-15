import './addContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraAlt } from '@fortawesome/free-solid-svg-icons';

const AddContent = () => {

    const handleKeyDown = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight+20}px`;     
    }

    return (
        <div class="share border bg-white rounded shadow mt-3">
            <div class="d-flex flex-row inputs p-2 py-4">
                <textarea class="border-0 form-control share-input" name="Text1" onKeyUp={(event) => handleKeyDown(event)} cols="40" rows="2" placeholder='Share your thoughts'></textarea>
                </div>
            <div class="d-flex flex-row justify-content-between border-top">
                <div class="d-flex flex-row publish-options">
                    <div class="align-items-center border-right p-2 share">
                        <FontAwesomeIcon icon={faCameraAlt} size="m" swapOpacity color='grey' className='photo-text'></FontAwesomeIcon>
                        <span className="photo-text">Photo</span>
                    </div>
                </div>
                <div class="publish-button">
                    <div class="align-items-center border-left p-2 px-5 btn publish">
                        <span class="ml-1">Publish</span></div>
                </div>
            </div>
        </div>
    );
}

export default AddContent;
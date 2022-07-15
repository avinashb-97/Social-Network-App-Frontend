
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

const LikeAndComment = () => {
    return (
        <div className="d-flex justify-content-around pt-3">
            <div className="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1">
                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                <p className="m-0">Like</p>
            </div>
            <div className="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1" data-bs-toggle="collapse" data-bs-target="#collapsePost1" aria-expanded="false" aria-controls="collapsePost1">
                <FontAwesomeIcon icon={faCommentAlt}></FontAwesomeIcon>
                <p className="m-0">Comment</p>
            </div>
        </div>
    );
}

export default LikeAndComment;
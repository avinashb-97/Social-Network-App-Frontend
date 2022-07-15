import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const LikeCount = () => {
    return (
        <div className="post__comment mt-3 position-relative pd-10">
            <div className=" d-flex align-items-center top-0 start-0 position-absolute like-style">
                <div className="me-2">
                    <FontAwesomeIcon icon={faThumbsUp} className="text-primary"></FontAwesomeIcon>
                    </div>
                <p className="m-0 text-muted fs-7">Liked by 3 people</p>
            </div>
        </div>
    );
}

export default LikeCount;
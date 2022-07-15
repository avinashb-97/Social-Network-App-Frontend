import './post.css';
import AuthorImage from './AuthorImage';
import LikeAndComment from './LikeAndComment';
import CommentDisplay from './CommentDisplay';
import AddComment from './AddComment';
import LikeCount from './LikeCount';
import {Accordion} from 'react-bootstrap';



const Post = () => {

    const content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fuga incidunt consequatur tenetur doloremque officia corrupti provident tempore vitae labore?";

    return (
        <div className="bg-white p-4 rounded shadow mt-3">
            <AuthorImage />
            <div className="mt-3">
                <div>
                    <p>{content}</p>
                    <img src="https://source.unsplash.com/random/12" alt="post image" className="rounded post-img"/>
                </div>
                <LikeCount />
            </div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='d-flex justify-content-end pointer'><p className="m-0 accordion-text">2 comments</p></Accordion.Header>
                    <Accordion.Body>
                        <CommentDisplay />
                        <CommentDisplay />
                        <AddComment />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <LikeAndComment />
        </div>
    );
};

export default Post;
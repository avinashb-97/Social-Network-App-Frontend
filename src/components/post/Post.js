import './post.css';
import AuthorImage from './AuthorImage';
import LikeAndComment from './LikeAndComment';
import CommentDisplay from './CommentDisplay';
import AddComment from './AddComment';
import LikeCount from './LikeCount';
import {Accordion} from 'react-bootstrap';

const Post = ({postData, user, deletePostAction, onClickLike}) => {

    const handleDeletePost = () => {
        deletePostAction(postData);
    }

    return (
        <div className="bg-white p-4 rounded shadow mt-3">
            <AuthorImage postData={postData} user={user} handleDeletePost={handleDeletePost}/>
            <div className="mt-3">
                <div>
                    <p className='show-space'>{postData.content}</p>
                    {postData.imageUrl != null && <img src={postData.imageUrl} alt="post image" className="rounded post-img"/>}
                </div>
                {postData.likesCount > 0 && <LikeCount postData={postData}/>}
            </div>
            <Accordion className='mt-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='d-flex justify-content-end pointer'><p className="m-0 accordion-text">2 comments</p></Accordion.Header>
                    <Accordion.Body>
                        <CommentDisplay />
                        <CommentDisplay />
                        <AddComment />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <LikeAndComment postData={postData} onClickLike={onClickLike} />
        </div>
    );
};

export default Post;
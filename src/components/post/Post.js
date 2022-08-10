import './post.css';
import AuthorImage from './AuthorImage';
import LikeAndComment from './LikeAndComment';
import CommentDisplay from './CommentDisplay';
import { useRef } from 'react';
import LikeCount from './LikeCount';
import {Accordion } from 'react-bootstrap';
import Axios from 'axios';
import DefaultProfilePic from '../../resources/images/ProfilePicDefault.png';

const Post = ({postData, user, deletePostAction, onClickLike, onAddComment}) => {

    const commentInputRef = useRef();

    const handleDeletePost = () => {
        deletePostAction(postData);
    }

    const handleFocusCommentBox = () => {
        commentInputRef.current.focus();
    }

    const submitComment = (e) => {
        e.preventDefault();
        const comment = commentInputRef.current.value;
        onAddComment(postData, comment);
        commentInputRef.current.value = "";
    }

    const commentCount = postData.comments.length == 1 ? "1 comment" : postData.comments.length+" comments";

    return (
        <div className="bg-white p-4 rounded shadow mt-3 mb-2">
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
                    <Accordion.Header className='d-flex justify-content-end pointer'><p className="m-0 accordion-text">{commentCount}</p></Accordion.Header>
                    <Accordion.Body>
                        {postData.comments.map((comment) => {
                            return <CommentDisplay key={comment.id} commentData={comment} />;
                        })}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <form className="d-flex my-1 m-3 mt-4" onSubmit={(e) => {submitComment(e)}}>
                <div>
                    <img src={user.userProfile.imageUrl != null ? user.userProfile.imageUrl : DefaultProfilePic} alt="avatar" className="rounded-circle me-2 avatar-style" />
                </div>
                <input type="text" className="form-control border-0 rounded-pill bg-gray"  ref={commentInputRef} placeholder="Write a comment" />
            </form>
            <LikeAndComment postData={postData} onClickLike={onClickLike} handleFocusCommentBox={handleFocusCommentBox}/>
        </div>
    );
};

export default Post;
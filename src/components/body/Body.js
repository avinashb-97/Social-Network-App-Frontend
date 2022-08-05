import './body.css';
import Post from '../post/Post';
import AddContent from '../addContent/AddContent';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Constant from '../../constants/Constant';
import AuthService from '../../services/AuthService';

const Body = ({user}) => {

    const [postData, setPostData] = useState([]);
    const postUrl = Constant.base_url+"api/post"

    useEffect(() => {
        const token = AuthService.getCurrentUserToken();
        Axios.defaults.headers.common['Authorization'] = token;
        Axios.get(postUrl)
        .then(res => {
            setPostData(res.data);
        })
        .catch(res => {
            console.log(res);
        })
    },[]);

    const addContent = (content, image) => {
        console.log(content);
        console.log(image);
        const data = {content:content, image:image };

        const formData = new FormData();
        formData.append("content", content);
        formData.append("image", image);
        
        const token = AuthService.getCurrentUserToken();
        Axios.defaults.headers.common['Authorization'] = token;
        Axios.post(postUrl, formData)
        .then(res => {
            const currData = postData;
            setPostData([res.data, ...currData]);
        })
        .catch(res => {
            console.log(res);
        })
    }

    const deletePost = (post) => {
        
        const token = AuthService.getCurrentUserToken();
        Axios.defaults.headers.common['Authorization'] = token;
        const url = postUrl+"/"+post.id;
        Axios.delete(url)
        .then(res => {
            const currData = postData.filter((currPost) => currPost != post);
            setPostData(currData);
        })
        .catch(res => {
            console.log(res);
        })
    }

    const onClickLike = (post, isLiked) => {

        console.log("Called");
        const token = AuthService.getCurrentUserToken();
        Axios.defaults.headers.common['Authorization'] = token;
        const url = postUrl+"/"+post.id+"/"+(isLiked ? "like" : "unlike");
        
        Axios.post(url)
        .then(res => {
            const currData = postData.map((currPost) => {
                if(currPost == post)
                {
                    return res.data;
                }
                return currPost;
            });
            setPostData(currData);
        })
        .catch(res => {
            console.log(res);
        })
    }

    return (
        
        <div className="container-fluid main-body-bg">
            <div className="row">
                <div className="col-sm">
                
                </div>
                <div className="col-sm">
                    <AddContent onAddContent={addContent}/>
                    { postData.map((post) => {
                        return <Post key={post.id} postData={post} user={user} deletePostAction={deletePost} onClickLike={onClickLike}/>
                    })}
                </div>
                <div className="col-sm">
                
                </div>
            </div>
        </div>
    );
}

export default Body;
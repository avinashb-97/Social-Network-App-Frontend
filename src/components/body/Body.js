import './body.css';
import Post from '../Post.js/Post';
import AddContent from '../addContent/AddContent';

const Body = () => {
    return (


        <div className="container-fluid main-body-bg">
            <div class="row">
                <div class="col-sm">
                
                </div>
                <div class="col-sm">
                    <AddContent />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div class="col-sm">
                
                </div>
            </div>
        </div>
    );
}

export default Body;
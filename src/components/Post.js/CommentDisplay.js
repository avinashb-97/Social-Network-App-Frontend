const CommentDisplay = () => {
    return (
        <div className="d-flex align-items-center my-1">
            <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle me-2 avatar-style"/>
            <div className="p-3 rounded comment__input w-100">    
                <p className="fw-bold m-0">John</p>
                <p className="m-0 fs-7 bg-gray p-2 rounded"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
        </div>
    )
}

export default CommentDisplay;
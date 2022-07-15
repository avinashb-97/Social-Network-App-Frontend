const AddComment = () => {
    return (
        <form className="d-flex my-1">
            <div>
                <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle me-2 avatar-style" />
            </div>
            <input type="text" className="form-control border-0 rounded-pill bg-gray" placeholder="Write a comment" />
        </form>
    );
}

export default AddComment;
const AuthorImage = () => {
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" className="rounded-circle me-2 avatar-style" />
                <div>
                    <p className="m-0 fw-bold">John Maxwell</p>
                    <span className="text-muted fs-7">July 17 at 1:23 pm</span>
                </div>
            </div>
        </div>
    );
}

export default AuthorImage;
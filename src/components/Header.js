

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top justify-content-end d-flex">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Social Network</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Network</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Events</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Jobs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">My Profile</a>
                    </li>
                </ul>
                </div>
            </div>   
        </nav>
    );
};

export default Header;
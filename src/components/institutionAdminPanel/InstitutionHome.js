import AuthService from "../../services/AuthService";

const InstitutionHome = () =>
{
    return (
        <div>
            <div>Logged in successfully !</div>
            <button onClick={AuthService.logout}>logout</button>
        </div>
    )
}

export default InstitutionHome;
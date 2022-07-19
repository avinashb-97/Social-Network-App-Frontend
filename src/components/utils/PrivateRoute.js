import { Outlet, Navigate } from 'react-router-dom'
import AuthService from '../../services/AuthService'

const PrivateRoutes = ({navigateTo}) => {

    return(
        AuthService.isLoggedIn() ? <Outlet/> : <Navigate to={navigateTo}/>
    )
}

export default PrivateRoutes;
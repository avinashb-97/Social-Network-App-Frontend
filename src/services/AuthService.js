import jwtDecode from "jwt-decode";
import Constant from "../constants/Constant";

const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
};
  
const login = (token, usertype) => {
    localStorage.setItem("token", token);
    if(usertype != null && getUserRoles().includes(usertype))
    {
        localStorage.setItem("user_type", usertype);
    }
}
const isLoggedIn = (userType) => {
    return localStorage.getItem("token") != null && localStorage.getItem("user_type") == Constant.userTypes.ADMIN;
}

const getCurrentUserToken = () => {
    return localStorage.getItem("token");
};

const decodeToken = () => {
    return jwtDecode(localStorage.getItem("token"));
}

const getUserRoles = () => {
    const token = decodeToken();
    console.log(token);
    return token.roles;

}


const AuthService = {
    logout,
    login,
    getCurrentUserToken,
    isLoggedIn
};

export default AuthService;

  
import jwtDecode from "jwt-decode";


const logout = () => {
    localStorage.removeItem("token");
};
  
const login = (token) => {
    
    localStorage.setItem("token", token);
}

const isLoggedIn = () => {
    return localStorage.getItem("token") != null;
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("token"));
};

const decodeToken = () => {
    return jwtDecode(localStorage.getItem("token"));
}



const AuthService = {
    logout,
    login,
    getCurrentUser,
    isLoggedIn
};

export default AuthService;

  
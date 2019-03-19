import axios from "axios";

const API = {
    authUser: (user) => {
        return axios.get("/api/user/auth-user", user);
    },
    
};

export default API;
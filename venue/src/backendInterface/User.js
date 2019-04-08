import axios from 'axios';

export const createUser = (name, password) => {
    axios.post('http://localhost:5000/api/user', {
        "name": name,
        "password": password,
    })
    .then((res) => {
        if (res.status == 200)
                alert("User created")
        })
        .catch(err => {
            alert("Creation Failed: " + err);
    })
};

export const loginUser = (name, password) => {
    axios.post('http://localhost:5000/api/user/auth-user', {
        "name": name,
        "password": password,
    })
    .then((res) => {
        if (res.status == 200)
                alert("User Logged in")
        })
        .catch(err => {
            alert("Failed to Login " + err);
    })
};
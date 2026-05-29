import axios from "axios";

axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
})

export async function register(username, email, password) {
    try {
        const response = await axios.post("/register", {
            username, email, password
        })
        return response.data;
    } catch (err) {
        console.log(err)
    }
}

export async function login(email, password) {
    try {
        const response = await axios.post("/login", {
            email, password
        })
        return response.data;
    } catch (err) {
        console.log(err)
    }
}

export async function logout() {
    try {
        const response = await axios.post("/logout")
        return response.data;
    } catch (err) {
        console.log(err)
    }
}

export async function getMe() {
    try {
        const response = await axios.get("/current-user")
        return response.data;
    } catch (err) {
        console.log(err)
    }
}
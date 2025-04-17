import axios from "axios";
const API_KEY = "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";
const baseURL = "http://api.alikooshesh.ir:3000";
export const singUpUser = async (userData: { email: string; password: string }) => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            throw new Error("Access token is missing or expired.");
        }
        const response = await axios.post(`${baseURL}/api/users/register`, userData, {
            headers: { 'api_key': API_KEY ,
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': "application/json",
            }

        });
        return response.data
    } catch (error) {
        console.log(error)
    }
};
import axios from "axios";
const API_KEY = "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";
const baseURL = "http://api.alikooshesh.ir:3000";
export const singUpUser = async (userData: { email: string; password: string }) => {
    try {

        const response = await axios.post(`${baseURL}/api/users/register`, userData, {
            headers: {
                'api_key': API_KEY,
                'Content-Type': "application/json",
            }
        });
        const { accessToken } = response.data;
        localStorage.setItem('AccessToken', accessToken);
        return response.data
    } catch (error) {
        console.log(error)
    }
};
import axios from "axios"
const BASEURL = "http://api.alikooshesh.ir:3000"
const API_KEY =
    "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy"
const accessToken = localStorage.getItem('accessToken');
export const getProduct = async () => {
    const result = await axios.get(`${BASEURL}/api/records/product`); {
        headers: {
            API_KEY: API_KEY
            Authorization: `Bearer ${accessToken}`
        }

    }
    return result.data;
}



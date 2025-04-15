import axios from "axios"
const BASEURL = "http://api.alikooshesh.ir:3000"

export const getProduct = async () => {
    const result = await axios.get(`${BASEURL}/api/records / product`);
    return result.data;
}
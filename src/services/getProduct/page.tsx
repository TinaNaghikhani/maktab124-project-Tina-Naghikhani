import axios from "axios";

const BASE_URL = "http://api.alikooshesh.ir:3000";
const API_KEY =
    "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";

export const getProduct = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            window.location.href = '/login-dashboard';
            return;
        }
        const result = await axios.get(`${BASE_URL}/api/records/product`, {
            headers: {
                "api_key": API_KEY,
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });
        return result.data.records;
    } catch (error) {
        console.error("Error fetching product:", error);

    }
};

export const getNewProduct = async () => {
    try {

        const result = await axios.get(`${BASE_URL}/api/records/product`, {
            headers: {
                "api_key": API_KEY,
                "Content-Type": "application/json",
            },
        });
        const newProducts = result.data.records.filter((product: any) => product.piblish === "new");
        return newProducts;
    } catch (error) {
        console.error("Error fetching product:", error);

    }
};

export const getFutureProduct = async () => {
    try {

        const result = await axios.get(`${BASE_URL}/api/records/product`, {
            headers: {
                "api_key": API_KEY,
                "Content-Type": "application/json",
            },
        });
        const newProducts = result.data.records.filter((product: any) => product.publish === "future",);
        return newProducts;
    } catch (error) {
        console.error("Error fetching product:", error);

    }
};
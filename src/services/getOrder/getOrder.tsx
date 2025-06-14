import axios from "axios";

const BASE_URL = "http://api.alikooshesh.ir:3000";
const API_KEY =
    "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";

export const getOrder = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            throw new Error("Access token is missing or expired.");
        }
        const result = await axios.get(`${BASE_URL}/api/records/order`, {
            headers: {
                "api_key": API_KEY,
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });
        console.log(result.data.records); // بررسی ساختار داده‌ها

        // بازگرداندن داده‌های دریافتی
        return result.data.records;
    } catch (error) {
        console.error("Error fetching order:", error);

    }
};

export const PutOrder = async (id: string, updatedData: any) => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            throw new Error("Access token is missing or expired.");
        }

        const result = await axios.put(`${BASE_URL}/api/records/order/${id}`, updatedData, {
            headers: {
                "api_key": API_KEY,
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });
        return result.data;
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
};

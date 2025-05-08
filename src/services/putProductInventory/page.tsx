import {ProductsInterface}  from "@/interfaces/interface";
import axios from "axios";

const BASE_URL = "http://api.alikooshesh.ir:3000";
const API_KEY =
    "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";

export const PutProduct = async (id: string, updatedData: Partial<ProductsInterface>) => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            throw new Error("Access token is missing or expired.");
        }
        const result = await axios.put(`${BASE_URL}/api/records/product/${id}`, updatedData,{
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
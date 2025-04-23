// api.ts
import axios from "axios";

const BASE_URL = "http://api.alikooshesh.ir:3000";
const API_KEY =
    "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy"

// تابع حذف محصول
export const deleteProduct = async (id: number) => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            throw new Error("Access token is missing or expired.");
        }
        console.log("Trying to delete product with ID:", id);

        const response = await axios.delete(`${BASE_URL}/api/records/product/${id}`, {
            headers: {
                "api_key": API_KEY,
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });

        // بررسی وضعیت پاسخ
        if (response.status === 200 || response.status === 204) {
            console.log("Product deleted successfully");
        } else {
            throw new Error(`Failed to delete product. Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error; // این خطا به تابع فراخوان منتقل می‌شود
    }
};
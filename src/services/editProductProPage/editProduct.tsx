
const BASE_URL = "http://api.alikooshesh.ir:3000";
const API_KEY =
    "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";
export const editProduct = async (id: number, data: any) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
        throw new Error("Access token is missing or expired.");
    }
    const res = await fetch(`${BASE_URL}/api/records/product/${id}`, {
        method: 'PUT',
            headers: {
                "api_key": API_KEY,
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
    
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Failed to update product");
    return await res.json();
};

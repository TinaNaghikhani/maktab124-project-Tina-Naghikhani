import axios from "axios";

const BASE_URL = "http://api.alikooshesh.ir:3000";
const API_KEY =
    "booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy";

export const postProduct = async (Product: any) => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            throw new Error("Access token is missing or expired.");
        }
        const result = await axios.post(`${BASE_URL}/api/records/product`, {
            name: Product.name,
            category: Product.category,
            image: Product.image,
            headerImg: Product.headerImg,
            athur: Product.athur,
            athurPic: Product.athurPic,
            pub: Product.pub,
            price: Product.price,
            offer: Product.offer,
            pages: Product.pages,
            age: Product.age,
            count: Product.count,
            cover: Product.cover,
            discription1: Product.discription1,
            discription2: Product.discription2,
            discription3: Product.discription3,
        },{
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
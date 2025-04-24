import SingleProduct from "@/app/singleProduct/page";
import SingleProductComponent from "@/components/singleProducShop/singleProduct";
import axios from "axios";
import React from "react";

interface IProps {
    params: Promise<{ id: string }>;
}

const BASE_URL="http://api.alikooshesh.ir:3000"
const API_KEY=
"booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy"

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
        throw new Error("Access token is missing or expired.");
    }
    const { id } = await params;
    const fetchData = await axios.get(`${BASE_URL}/api/records/product/${id}`, {
        headers: {
            "api_key": API_KEY,
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    });
    const productData = fetchData.data;
    return (
        <>
            <SingleProductComponent product={productData} />
        </>
    );
}

export default Page;

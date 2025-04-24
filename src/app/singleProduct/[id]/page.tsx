import SingleProduct from "@/app/singleProduct/[id]";
import React from "react";

interface IProps {
    params: Promise<{ id: string }>;
}

const BASE_URL="http://api.alikooshesh.ir:3000"
const api_key=
"booktinaswuIVzBeQZ98DMmOEmjLenHyKzAbG5UJ4PrAHkD3gV4OnOQvlm6Siz9bKUfKzXjaMicQFeZu21VVmwiwUK5I4qoARsmpvsg5PLu3ee1OzY7XvckHXBmdbOmy"

async function Product({ params }: IProps) {
    const { id } = await params;
    const response = await fetch(
        `${BASE_URL}/api/records/product/${id}`,
        {
            headers: {
               APIKEY:api_key,
            },
        }
    );
    const result = await response.json();
    console.log(result);
    return (
        <>
            <SingleProduct product={result} />
        </>
    );
}

export default Product;

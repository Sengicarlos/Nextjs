"use client";
import { usePathname } from "next/navigation"


export default function Notfound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return(
        <div>
            <h1>Riview  {reviewId}not Found for product {productId}</h1>
            <p>Could not find required recource</p>
        </div>
    )
}
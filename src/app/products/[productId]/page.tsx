import {Metadata} from "next"

type Props = {
    params: Promise<{productId: string}>;
}

export const generateMetadata = async ({params}: Props) => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`iphone ${id}`)
        })})
    return{
        title:`Product ${title}`,
    }
}

export default async function productDetails({params}: Props) {
    const productId = (await params).productId;
    return <h1>Details about product {productId}</h1>
}
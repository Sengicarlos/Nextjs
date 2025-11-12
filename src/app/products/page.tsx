// this is how to handle dynamic routes in nextjs

import Link from 'next/link'
export default function productList(){
    const productId = 100;
    return <>
        <Link href="/">Home</Link>
        <h1>Product list</h1>
        <ul>
            <li><Link href="/products/1">Product 1</Link></li>
            <li><Link href="/products/2">Product 2</Link></li>
            <li><Link href="/products/3" replace>Product 3</Link></li>
            <li><Link href="/products/4">Product 4</Link></li>
            <li><Link href={`/products/${productId}`}>Product {productId}</Link></li>
            
        </ul>
    </>
}
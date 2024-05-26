import { useEffect } from "react"
import {useState } from "react"
import ProductCard from "../uI/ProductCard"

export default function NewProducts() {
    const [products, setProducts] = useState([])

    console.log(products)
    // fetch data
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error.massage))
    }, [])


    console.log(products)
  return (
    <div className="w-full xl:w-4/5 mx-auto">
        <h2>New Products</h2>
        <div className="grid grid-cols-3 gap-x-8 gap-y-12 mx-8">
            {
                products.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    </div>
  )
}

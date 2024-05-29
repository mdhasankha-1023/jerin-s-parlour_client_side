import { useEffect } from "react"
import { useState } from "react"
import ServiceCard from "../uI/ServiceCard"
import Buttons from "../uI/Buttons"
import { Link } from "react-router-dom"

export default function NewServices() {
    const [products, setProducts] = useState([])

    console.log(products)
    // fetch data
    useEffect(() => {
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
                    products
                        .slice(0, 6)
                        .map(product => <ServiceCard key={product.id} product={product} />)
                }
            </div>
            <div className="text-center my-16">
                <Link to={'/all-products'}>
                    <Buttons value={'Show all'} />
                </Link>
            </div>
        </div>
    )
}

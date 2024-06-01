import { useEffect } from "react"
import { useState } from "react"
import ServiceCard from "../uI/ServiceCard"
import Buttons from "../uI/Buttons"
import { Link } from "react-router-dom"
import PrimaryTitle from "../uI/PrimaryTitle"

export default function NewServices() {
    const [products, setProducts] = useState([])

    // console.log(products)
    // fetch data
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error.massage))
    }, [])


    // console.log(products)
    return (
        <div className="w-full xl:w-4/5 mx-auto">
            <PrimaryTitle text1={'Our'} text2={'Services'} style={'text-center'}/>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12 mx-8">
                {
                    products
                        .slice(0, 3)
                        .map(product => <ServiceCard key={product._id} product={product} />)
                }
            </div>
            <div className="text-center my-16">
                <Link to={'/services'}>
                    <Buttons value={'Explore More'} />
                </Link>
            </div>
        </div>
    )
}

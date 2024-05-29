import { useEffect, useState } from "react"
import ServiceCard from "../../Components/uI/ServiceCard"
import PrimaryTitle from "../../Components/uI/PrimaryTitle"

export default function Services() {
  const [products, setProducts] = useState([])

  console.log(products)
  // fetch data
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error.massage))
  }, [])


  return (
    <div className="w-full xl:w-4/5 mx-auto mt-8 mb-20">
      <PrimaryTitle text1={'Our Awesome'} text2={'Services'} style={'text-center'}/>
      <div className="grid grid-cols-3 gap-x-8 gap-y-12 mx-8 my-20">
        {
          products
            .map(product => <ServiceCard key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}

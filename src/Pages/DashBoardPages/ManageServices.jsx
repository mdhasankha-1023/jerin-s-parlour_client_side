import { useEffect, useState } from "react"
import ServiceCard from "../../Components/uI/ServiceCard"

export default function ManageServices() {
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
    <div className="w-full xl:w-4/5 mx-auto">
      <h2>Your Products</h2>
      <div className="grid grid-cols-3 gap-x-8 gap-y-12 mx-8">
        {
          products
            .map(product => <ServiceCard key={product.id} product={product}
            type={'dashBoard'}
              />)
        }
      </div>
    </div>
  )
}

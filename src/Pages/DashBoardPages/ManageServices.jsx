import ServiceCard from "../../Components/uI/ServiceCard"
import PrimaryTitle from "../../Components/uI/PrimaryTitle"
import { useLoaderData } from "react-router-dom"
import Auth from "../../Contexts/Auth";
import Swal from "sweetalert2";

export default function ManageServices() {
  const { successMsg, errorMsg } = Auth();
  const products = useLoaderData();
  // const [products, setProducts] = useState([])

  console.log(products)
  // remove product
  const removeBtn = (id) => {
    console.log(id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/products/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            successMsg('Delete successfully')
          })
          .catch(error => errorMsg(error.massage))
      }
    });

  }




  return (
    <div className="w-full xl:w-4/5 mx-auto mt-8 mb-20">
      <PrimaryTitle text1={'Manage Your'} text2={'Services'} style={'text-center'} />

      <div className="grid grid-cols-2 gap-x-8 gap-y-12 mx-8 my-20">
        {
          products
            .map(product => <ServiceCard key={product.id} product={product}
              handler={removeBtn}
              type={'dashBoard'}
            />)
        }
      </div>
    </div>
  )
}

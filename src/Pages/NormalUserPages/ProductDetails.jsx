import { useLoaderData } from "react-router-dom"
import Buttons from "../../Components/uI/Buttons";
import PrimaryTitle from "../../Components/uI/PrimaryTitle";

export default function ProductDetails() {
  const service = useLoaderData();
  console.log(service)
  const {proName, proPicture, proDetails, price} = service;


  return (
    <div className="flex flex-col gap-6">

      {/* first row */}
      <div className="flex gap-4">
        {/* first col */}
        <div className="w-3/4 bg-btnPrimary mx-auto">
          <img src={proPicture} alt="" />
        </div>
        {/* second col */}
        <div className="w-1/4">
            <h2>{proName}</h2>
            <p>${price}</p>
            <Buttons value={'Book Now'} />
        </div>
      </div>

      {/* second row */}
      <div>
        <PrimaryTitle style={'text-center'} text1={'Service'} text2={'Details'}/>
          <p>{proDetails}</p>
      </div>
    </div>
  )
}

import Banner from "../../Components/Banner/Banner";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Status from "../../Components/Status/Status";
import Testimonials from "../../Components/Testimonials/Testimonials";


export default function Main() {
  return (
    <div>
      <Banner></Banner>
      <NewProducts></NewProducts>
      <Status/>
      <Testimonials/>
    </div>
  )
}

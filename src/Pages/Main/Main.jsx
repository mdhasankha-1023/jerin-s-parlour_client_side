import Banner from "../../Components/Banner/Banner";
import ContactForm from "../../Components/ContactUs/ContactForm";
import NewServices from "../../Components/NewServices/NewServices";
import Status from "../../Components/Status/Status";
import Testimonials from "../../Components/Testimonials/Testimonials";


export default function Main() {
  return (
    <div>
      <Banner/>
      <NewServices/>
      <Status/>
      <Testimonials/>
      <ContactForm/>
    </div>
  )
}

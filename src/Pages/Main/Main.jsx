import Banner from "../../Components/Banner/Banner";
import ContactForm from "../../Components/ContactUs/ContactForm";
import NewServices from "../../Components/NewServices/NewServices";
import OurExpertWorkers from "../../Components/OurExpertWorkers/OurExpertWorkers";
import Status from "../../Components/Status/Status";
import Testimonials from "../../Components/Testimonials/Testimonials";


export default function Main() {
  return (
    <div>
      <Banner/>
      <NewServices/>
      <OurExpertWorkers/>
      <Status/>
      <Testimonials/>
      <ContactForm/>
    </div>
  )
}

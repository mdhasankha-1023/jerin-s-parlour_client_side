import Banner from "../../Components/Banner/Banner";
import ContactForm from "../../Components/ContactUs/ContactForm";
import NewServices from "../../Components/NewServices/NewServices";
import OurExpertWorkers from "../../Components/OurExpertWorkers/OurExpertWorkers";
import Status from "../../Components/Status/Status";
import Testimonials from "../../Components/Testimonials/Testimonials";


export default function Main() {
  return (
    <div>
      <div className="bg-secondaryBg py-12">
        <Banner />
      </div>
      <div className="py-12">
        <NewServices />
      </div>
      <div className="bg-secondaryBg py-12">
        <OurExpertWorkers />
      </div>
      <div className="py-12">
        <Status />
      </div>
      <div className="bg-secondaryBg py-12">
        <Testimonials />
      </div>
      <div className="py-12">
        <ContactForm />
      </div>
    </div>
  )
}

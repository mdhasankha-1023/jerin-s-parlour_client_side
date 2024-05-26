import SocialButtons from "../../Components/uI/SocialButtons";
import Form from "../../Form/Form";

export default function SignUp() {
  return (
    <div>
        <Form/>
        <SocialButtons text={'Sign up with google'}/>
        <SocialButtons text={'Sign up with facebook'}/>
    </div>
  )
}

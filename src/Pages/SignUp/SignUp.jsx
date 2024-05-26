import SocialButtons from "../../Components/uI/SocialButtons";
import Form from "../../Form/Form";

export default function SignUp() {
    return (
        <div>
            <Form type={'signUp'}/>
            <div className="flex flex-col justify-center items-center">
                <SocialButtons text={'Sign up with google'} />
                <SocialButtons text={'Sign up with facebook'} />
            </div>
        </div>
    )
}

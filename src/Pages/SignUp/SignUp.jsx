import SocialButtons from "../../Components/uI/SocialButtons";
import Auth from "../../Contexts/Auth";
import Form from "../../Form/Form";

export default function SignUp() {
    const {user, google, github} = Auth()
    console.log(user, google)

    // const sign up with google
    const onGoogle = () => {
        google()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error.massage))
    }

    // const sign up with google
    const onGithub = () => {
        github()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error.massage))
    }


    return (
        <div>
            <Form type={'signUp'}/>
            <div className="flex flex-col justify-center items-center">
                <SocialButtons handler={onGoogle} text={'Sign up with google'} />
                <SocialButtons handler={onGithub} text={'Sign up with github'} />
            </div>
        </div>
    )
}

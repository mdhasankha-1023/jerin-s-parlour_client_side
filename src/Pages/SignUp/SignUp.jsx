import SocialButtons from "../../Components/uI/SocialButtons";
import Auth from "../../Contexts/Auth";

export default function SignUp() {
    const { user, google, github, successMsg, errorMsg, createUser } = Auth()
    console.log(user.email)

    // const sign up with google
    const onGoogle = () => {
        google()
            .then(result => {
                const user = result.user;
                console.log(user)
                successMsg('Sign up successfully')
            })
            .catch(error => errorMsg(error.massage))
    }

    // const sign up with google
    const onGithub = () => {
        github()
            .then(result => {
                const user = result.user;
                console.log(user)
                successMsg('Sign up successfully')
            })
            .catch(error => errorMsg(error.massage))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const info = { name, email, password }
        console.log(email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                successMsg('Sign up successfully')
            })
            .catch(error => errorMsg(error.massage))


    }



    return (
        <div>
            <div className='border-2 border-solid w-full max-w-md mx-auto py-[24px] px-[50px]'>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" 
                        name="name"
                        className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" 
                        name="email"
                        className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" 
                        name={'password'}
                        className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center">
                <SocialButtons handler={onGoogle} text={'Sign up with google'} />
                <SocialButtons handler={onGithub} text={'Sign up with github'} />
            </div>
        </div>
    )
}

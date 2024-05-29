import { Link, useNavigate } from "react-router-dom";
import Auth from "../../Contexts/Auth";
import SocialButtons from "../../Components/uI/SocialButtons";
import PrimaryTitle from "../../Components/uI/PrimaryTitle";


export default function SignIn() {
  const { signIn, successMsg, errorMsg, google, github } = Auth();
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const info = { name, email, password }
    console.log(email, password)

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        successMsg('Sign In successfully')
        navigate('/')
      })
      .catch(error => errorMsg(error.massage))


  }

  // const sign up with google
  const onGoogle = () => {
    google()
      .then(result => {
        const user = result.user;
        console.log(user)
        successMsg('Sign up successfully')
        navigate('/')
      })
      .catch(error => errorMsg(error.massage))
  }

  // const sign up with github
  const onGithub = () => {
    github()
      .then(result => {
        const user = result.user;
        console.log(user)
        successMsg('Sign up successfully')
        navigate('/')
      })
      .catch(error => errorMsg(error.massage))
  }


  return (
    <div className="flex items-center justify-center h-screen">
      <div className='shadow-xl py-12 px-8 rounded w-1/3'>
        <PrimaryTitle text1={'Sign'} text2={'In'} style={'text-center'} />
        <form onSubmit={handleSubmit} className="card-body w-full p-0">
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
            <button className="btn bg-primaryBg text-[#fff]" type="submit">Sign In</button>
          </div>
        </form>
        <p className="my-4">Don not have any account? <Link className="text-btnPrimary underline" to={"/signUp"}>sign Up</Link></p>
        <div className="flex flex-col justify-center gap-4">
          <SocialButtons handler={onGoogle} icon={'google'} text={'Continue with Google'} />
          <SocialButtons handler={onGithub} icon={'github'} text={'Continue with Github'} />
        </div>
      </div>
    </div>
  )
}

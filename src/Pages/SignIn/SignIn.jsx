import { Link, useNavigate } from "react-router-dom";
import Auth from "../../Contexts/Auth";


export default function SignIn() {
  const {signIn, successMsg, errorMsg} = Auth();
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
  return (
    <div>
      <div className='border-2 border-solid w-full max-w-md mx-auto py-[24px] px-[50px]'>
        <form onSubmit={handleSubmit} className="card-body">
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
            <button className="btn btn-primary" type="submit">Sign In</button>
          </div>
        </form>
        <p>Don not have any account? <Link className="text-btnPrimary underline" to={"/signUp"}>sign Up</Link></p>
      </div>
    </div>
  )
}

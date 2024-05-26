import { Link, useNavigate } from "react-router-dom";
import Buttons from "../uI/Buttons";
import Auth from "../../Contexts/Auth";


export default function Navbar() {
  const { user, logOut, successMsg, errorMsg } = Auth();
  const navigate = useNavigate()


  const handleLogOutBtn = () =>{
    logOut()
    .then(res => {
      console.log(res)
      successMsg('Sign out successfully')
      navigate('/signIn')
    })
    .catch(error => errorMsg(error.massage))
  }

  const navLink = (
    <>
      <li><Link>Home</Link></li>
      <li><Link to={'/all-products'}>All Products</Link></li>
      <li><Link>Contact us</Link></li>
      <li><Link to={'/user-dashBoard'}>Dashboard</Link></li>
    </>

  )
  return (
    <div className="navbar bg-base-100 w-full xl:w-4/5 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>

          {/* small device */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>


        {/* company logo */}
        <Link to={'/'} className="btn btn-ghost text-xl">Jerin&rsquo;s parlour</Link>
      </div>

      {/* large device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>

      {/* button */}
      <div className="navbar-end flex gap-8">
        {user ? <Buttons handler={handleLogOutBtn} value={'Sing out'} />
          :
          <>
            <Buttons value={'Sign in'} />
            <Buttons value={'Sign up'} />
          </>}

      </div>
    </div>
  )
}

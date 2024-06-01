import { Link, Outlet, useNavigate } from "react-router-dom"
import UserAvater from "../../Components/uI/UserAvater"
import Auth from "../../Contexts/Auth"
import Buttons from "../../Components/uI/Buttons";

export default function DashBoardLayout() {
    const { user, logOut, successMsg, errorMsg } = Auth();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleLogOutBtn = () => {
        logOut()
            .then(res => {
                console.log(res)
                successMsg('Sign out successfully')
                navigate(from, { replace: true })
            })
            .catch(error => errorMsg(error.massage))
    }

    const dashBoardLink = (
        <>
            <li><Link to={'/user-dashBoard/user-info'}>User Info</Link></li>
            <li><Link to={'/user-dashBoard/manage-services'}>Manage</Link></li>
            <li><Link to={'/user-dashBoard/add-service'}>Add Service</Link></li>
        </>
    )

    const navLink = (
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/our-teams'}>Our teams</Link></li>
            <li><Link to={'/contact-us'}>Contact us</Link></li>
            <li><Link to={'/about'}>About</Link></li>
        </>

    )


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-center items-center">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">
                </label> */}
                <Outlet />

            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <UserAvater userPhoto={user?.photoURL} userEmail={user?.email} />
                    <div className="divider"></div>
                    {/* Sidebar content here */}
                    {dashBoardLink}
                    <div className="divider"></div>
                    {navLink}
                    <div className="mt-4">
                        <Buttons handler={handleLogOutBtn} value={'Sing out'} />
                    </div>
                </ul>

            </div>
        </div>
    )
}

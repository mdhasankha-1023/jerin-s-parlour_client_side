import { Link, Outlet } from "react-router-dom"
import UserAvater from "../../Components/uI/UserAvater"
import Auth from "../../Contexts/Auth"

export default function DashBoardLayout() {
    const { user } = Auth();

    console.log(user)

    const dashBoardLink = (
        <>
            <li><Link to={'/user-dashBoard/user-info'}>User Info</Link></li>
            <li><Link to={'/user-dashBoard/all-products'}>All Products</Link></li>
            <li><Link to={'/user-dashBoard/add-product'}>Add Product</Link></li>
        </>
    )

    const navLink = (
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link>Our teme</Link></li>
            <li><Link>Contact us</Link></li>
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
                </ul>

            </div>
        </div>
    )
}

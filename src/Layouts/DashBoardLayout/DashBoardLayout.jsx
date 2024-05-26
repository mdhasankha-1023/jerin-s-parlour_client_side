import { Link } from "react-router-dom"

export default function DashBoardLayout() {

    const dashBoardLink = (
        <>
            <li><Link>User Info</Link></li>
            <li><Link>All Products</Link></li>
            <li><Link>Add Products</Link></li>
        </>
    )

    const navLink = (
        <>
            <li><Link>Home</Link></li>
            <li><Link>Our teme</Link></li>
            <li><Link>Contact us</Link></li>
            <li><Link to={'/user-dashBoard'}>Dashboard</Link></li>
        </>

    )


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {dashBoardLink}
                    <div className="divider"></div> 
                    {navLink}
                </ul>

            </div>
        </div>
    )
}

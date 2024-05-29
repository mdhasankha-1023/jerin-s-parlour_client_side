import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import Auth from "../../Contexts/Auth";

// eslint-disable-next-line react/prop-types
export default function ServiceCard({ product, type }) {
    // eslint-disable-next-line react/prop-types
    const { proName, price, proDetails, proPicture } = product;
    const { user } = Auth();
    console.log(product)

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="h-1/2"><img className="w-full h-full" src={proPicture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{proName}</h2>
                <p>{proDetails}</p>
                <p>{price}</p>
                <div className="card-actions">
                    {user && type === 'dashBoard'?
                        <>
                            <Link to={'/product-details'}>
                                <Buttons value={'Details'} />
                            </Link>
                            <Link to={'/user-dashBoard/pro-update'}>
                                <Buttons value={'Update'} />
                            </Link>
                            <Buttons value={'Remove'} />
                        </>
                        :
                        <Link to={'/product-details'}>
                            <Buttons value={'Details'} />
                        </Link>
                    }

                </div>
            </div>
        </div>
    )
}


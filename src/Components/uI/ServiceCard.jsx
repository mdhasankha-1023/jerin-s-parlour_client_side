import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import Auth from "../../Contexts/Auth";
import { TrashIcon } from "@heroicons/react/16/solid";


// eslint-disable-next-line react/prop-types
export default function ServiceCard({ product, type, handler }) {
    const { user } = Auth();
    // eslint-disable-next-line react/prop-types
    const { proName, price, proDetails, proPicture, _id } = product;
    // console.log(product)

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="h-2/5"><img className="w-full h-full" src={proPicture} alt="Shoes" /></figure>
            <div className="card-body items-center gap-y-0 px-2 py-4 h-3/5">
                <h2 className="card-title">{proName}</h2>
                <p className="text-primaryBg font-bold">${price}</p>
                <p className="text-center">{proDetails}</p>
                <div className="card-actions items-center gap-x-8">
                    {user && type === 'dashBoard' ?
                        <>
                            <Link to={`/product-details/${_id}`}>
                                <Buttons value={'Details'} />
                            </Link>
                            <Link to={`/user-dashBoard/pro-update/${_id}`}>
                                <Buttons value={'Edit'} />
                            </Link>
                            <TrashIcon onClick={()=>handler(_id)} className="h-8 w-8 text-primaryBg cursor-pointer" />
                        </>
                        :
                        <Link to={`/product-details/${_id}`}>
                            <Buttons value={'Details'} />
                        </Link>
                    }

                </div>
            </div>
        </div>
    )
}


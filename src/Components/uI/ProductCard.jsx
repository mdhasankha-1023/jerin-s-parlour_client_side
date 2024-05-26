
// eslint-disable-next-line react/prop-types
export default function ProductCard({product}) {
    // eslint-disable-next-line react/prop-types
    const {proName, price, proDetails, proPicture} = product;
    console.log(product)
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="h-1/2"><img className="w-full h-full" src={proPicture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{proName}</h2>
                <p>{proDetails}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}


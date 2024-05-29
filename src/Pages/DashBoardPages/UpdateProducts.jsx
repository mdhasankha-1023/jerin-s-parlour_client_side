import { useLoaderData } from "react-router-dom";
import Buttons from "../../Components/uI/Buttons";
import PrimaryTitle from "../../Components/uI/PrimaryTitle";
import Auth from "../../Contexts/Auth";

export default function UpdateProducts() {
    const { user, successMsg, errorMsg } = Auth();
    const service = useLoaderData();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const proName = form.proName.value;
        const price = form.price.value;
        const proDetails = form.proDetails.value;
        const proPicture = form.proPicture.value;
        const info = { name, email, proName, price, proDetails, proPicture }
        console.log(info)

        fetch(`http://localhost:3000/products/${service.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                successMsg('Product add successfully')
                form.reset()
            })
            .catch(error => errorMsg(error.massage))

    }

    return (
        <div className="">
            <div className='shadow-xl py-12 px-8 rounded'>
                <PrimaryTitle text1={'Update Your'} text2={'Service'} style={'text-center'} />
                <form onSubmit={handleSubmit} className="card-body">
                    {/* 1st input row */}
                    <div className="flex justify-center items-center gap-4">
                        {/* 1st input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name
                                </span>
                            </label>
                            <input type="text" placeholder="User Name"
                                name="name"
                                className="input input-bordered"
                                readOnly
                                defaultValue={user?.name} />
                        </div>
                        {/* 2nd input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" placeholder="User Email"
                                name="email"
                                className="input input-bordered"
                                readOnly
                                defaultValue={user?.email} />
                        </div>
                    </div>
                    {/* 2nd input row */}
                    <div className="flex justify-center items-center gap-4">
                        {/* 3rd  input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Prod Name</span>
                            </label>
                            <input type="text" placeholder="Product name"
                                name={'proName'}
                                className="input input-bordered"
                                defaultValue={service.proName}
                                required />

                        </div>
                        {/* 4th  input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="00"
                                name={'price'}
                                className="input 
                                input-bordered"
                                defaultValue={service.price}
                                required />

                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className="w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture Link</span>
                            </label>
                            <input type="text" placeholder="Picture Link"
                                name={'proPicture'}
                                className="input input-bordered" 
                                defaultValue={service.proPicture}
                                required />

                        </div>
                    </div>
                    {/* 4th row */}
                    <div className="w-full mt-4">
                        <textarea placeholder="Write Product Details..."
                            name="proDetails"
                            className="textarea textarea-bordered textarea-lg w-full"
                            defaultValue={service.proDetails}
                            required></textarea>
                    </div>
                    {/* button */}
                    <div className="form-control mt-6">
                        <Buttons type={'submit'} value={'Update'} />
                    </div>
                </form>

            </div>

        </div>
    )
}

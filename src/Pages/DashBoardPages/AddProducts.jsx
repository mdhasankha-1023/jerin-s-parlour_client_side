import Buttons from "../../Components/uI/Buttons";
import PrimaryTitle from "../../Components/uI/PrimaryTitle";
import Auth from "../../Contexts/Auth";

export default function AddProducts() {
    const { user, successMsg, errorMsg } = Auth()

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

        fetch('http://localhost:3000/products', {
            method: 'POST',
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
                <PrimaryTitle text={'Add Product'}/>
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
                                className="input input-bordered" required />

                        </div>
                        {/* 4th  input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="00"
                                name={'price'}
                                className="input input-bordered" required />

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
                                className="input input-bordered" required />

                        </div>
                    </div>
                    {/* 4th row */}
                    <div className="w-full">
                        <textarea placeholder="Write Product Details..."
                            name="proDetails"
                            className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    {/* button */}
                    <div className="form-control mt-6">
                        <Buttons type={'submit'} value={'ADD'} />
                    </div>
                </form>

            </div>

        </div>
    )
}

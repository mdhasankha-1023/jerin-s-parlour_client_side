import Auth from "../../Contexts/Auth";

export default function UpdateProducts() {
    const { user } = Auth()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const info = { name, email, password }
        console.log(email, password)

        // createUser(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user)
        //         successMsg('Sign up successfully')
        //         navigate('/signIn')
        //     })
        //     .catch(error => errorMsg(error.massage))


    }
    return (
        <div className="">
            <div className='border-2 border-solid w-full max-w-md py-[24px] mx-8'>
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
                    {/* 2nd inpurt row */}
                    <div className="flex justify-center items-center gap-4">
                        {/* 3rd  input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
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
                        <textarea placeholder="Write Product Details..."
                            name="proDetails"
                            className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    {/* button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">ADD</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

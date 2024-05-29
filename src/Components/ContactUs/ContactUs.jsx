import Buttons from "../uI/Buttons";
import PrimaryTitle from "../uI/PrimaryTitle";

export default function ContactUs() {
  return (
    <div className="xl:w-4/5 mx-auto my-20 bg-secondaryBg">
      <PrimaryTitle text1={'Contact'} text2={'Us'} style={'text-center'} />
      <div className='px-8 rounded w-4/5 mx-auto'>
        <PrimaryTitle text={'Add Product'} />
        <form className="card-body gap-y-8">
          {/* 1st input row */}
          <div className="flex justify-center items-center gap-8">
            {/* 1st input */}
            <div className="form-control w-1/2">
              <input type="text" placeholder="First name"
                name="name"
                className="input input-bordered"
             />
            </div>
            {/* 2nd input */}
            <div className="form-control w-1/2">
              <input type="text" placeholder="Last Name"
                name="lastName"
                className="input input-bordered" />
            </div>
          </div>

          {/* 2nd input row */}
          <div className="flex justify-center items-center gap-8">
            {/* 3rd  input */}
            <div className="form-control w-1/2">
              <input type="email" placeholder="Email Address"
                name={'proName'}
                className="input input-bordered" required />

            </div>
            {/* 4th  input */}
            <div className="form-control w-1/2">
              <input type="number" placeholder="Phone Number"
                name={'phoneNumber'}
                className="input input-bordered" required />

            </div>
          </div>

          {/* 3rd input row */}
          <div className="w-full">
            <textarea placeholder="Your Massage..."
              name="proDetails"
              className="textarea textarea-bordered textarea-lg w-full" ></textarea>
          </div>
          {/* button */}
          <div className="form-control">
            <Buttons value={'Send Massage'} />
          </div>
        </form>

      </div>
    </div>
  )
}

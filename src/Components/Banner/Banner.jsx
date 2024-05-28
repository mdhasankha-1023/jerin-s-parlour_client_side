import Buttons from "../uI/Buttons";
import bannerPic from '../../assets/banner_pic/girl.jpg'

export default function Banner() {
    return (
        <div className="flex w-full xl:w-4/5 mx-auto mb-20 mt-8">
            <div className='w-1/2 px-4'>
                <h2 className="text-start text-5xl font-bold mb-4">Beauty Salon for Every Woman</h2>
                <p className='text-justify my-8'>Mia keeps everything well-organized and clean at her salon. She was compassionate and understood my skin concerns and breakout issues thoroughly. She provided me with the best herbal facial for my acne-prone skin. I haven’t seen any breakouts since a month after the facial. I strongly refer her to anyone with damaged or acne-prone skin.</p>
                <Buttons value={'Get an Appointment'} />
            </div>
            <div className='w-1/2 px-4'>
                <img src={bannerPic} alt="model" />
            </div>
        </div>
    )
}

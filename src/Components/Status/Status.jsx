import girl from "../../assets/banner_pic/girl_2.jpg"
export default function Status() {
    return (
        <div className="flex items-center justify-center flex-row-reverse w-full xl:w-4/5 mx-auto mb-20 mt-8">
            <div className='w-1/2 px-4'>
                <h2 className="text-start text-3xl font-bold mb-4">Let us handle your screen professionally</h2>
                <p className='text-justify my-8'>Mia keeps everything well-organized and clean at her salon. She was compassionate and understood my skin concerns and breakout issues thoroughly. She provided me with the best herbal facial for my acne-prone skin. I haven’t seen any breakouts since a month after the facial. I strongly refer her to anyone with damaged or acne-prone skin.</p>

                <div className="flex gap-4 my-8">
                    {/* state one */}
                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-value text-primaryBg">500+</div>
                            <div className="stat-desc">Happy Customers</div>
                        </div>

                    </div>

                    {/* state two */}
                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-value text-primaryBg">16+</div>
                            <div className="stat-desc">Total Services</div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-1/2 px-4'>
                <img className="rounded" src={girl} alt="model" />
            </div>
        </div>
    )
}

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideCard from "../uI/SlideCard";
import { useEffect, useState } from "react";

export default function Testimonials() {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('/fackReview.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])


    return (
        <div className="w-full xl:w-4/5 mx-auto px-4">
            <Swiper
                slidesPerView={3}
                spaceBetween={60}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-20"
            >

                {
                    reviews.map(review =>
                        <>
                            <SwiperSlide className="mb-20">
                                <SlideCard key={review.id}
                                    review={review}
                                />
                            </SwiperSlide>
                        </>
                    )
                }

            </Swiper>
        </div >
    )
}

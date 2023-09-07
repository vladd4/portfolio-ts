import { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Avatar from '../img/feedback.png'
import { feedbackUsers } from "../feedbackUsers";

const Feedback:FC =() => {
    return (
        <section id="blog" className="py-10 bg-light-bg px-5">
            <h1 className="text-[calc(calc(1vh+1vw)*1.3)] flex justify-center pb-7 pt-5 font-semibold text-center">What clients<br></br> Feedback about me</h1>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                {feedbackUsers.map((user, index) => {
                    return (
                        <SwiperSlide key={index}>
                        <article className="flex flex-col justify-center items-center py-5">
                            <div className="flex flex-col justify-center items-center">
                                <img className="max-[650px]: w-9/12" alt={user.name} src={Avatar}></img>
                                <h1 className="text-[calc(calc(1vh+1vw)/1.2)] font-medium pt-2">{user.name}</h1>
                                <p className="text-grey text-[calc(calc(1vh+1vw)/1.4)] pb-5">{user.work}</p>
                            </div>
                            <p className="max-w-3xl text-center pb-10 text-[calc(calc(1vh+1vw)/1.3)]">{user.info}</p>
                        </article>
                    </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}
export default Feedback;
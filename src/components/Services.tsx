import { FC } from "react";
import Design from '../img/Icon1.png'
import Mobile from '../img/Icon.2png.png';
import Branding from '../img/Icon.3png.png'
import BrandWhite from '../img/icon3_white.png'
import ServiceCard from "./ServiceCard";

const Services:FC = () => {
    return (
        <section className="grid place-items-center py-10 px-5">
            <h1 className="uppercase py-6 text-[calc(calc(1vh+1vw)*1.1)] font-semibold h-shadow">services</h1>
            <div className="flex justify-center items-center gap-20 pt-3 max-[650px]:flex-col max-[650px]:gap-1 max-[400px]:gap-0">
                <ServiceCard id='card-1' imgSrcHover={Mobile} imgSrc={Design} textAlt="Web Design Image" textH="Web Design" textP="Well we're movin' on up to the east side. To a deluxe apartment in the."></ServiceCard>
                <ServiceCard id='card-2' imgSrcHover={Mobile} imgSrc={Mobile} textAlt="Mibile App Image" textH="Mobile App" textP="Well we're movin' on up to the east side. To a deluxe apartment in the."></ServiceCard>
                <ServiceCard id='card-3' imgSrcHover={BrandWhite} imgSrc={Branding} textAlt="Branding Image" textH="Branding" textP="Well we're movin' on up to the east side. To a deluxe apartment in the."></ServiceCard>
            </div>
        </section>
    )
}
export default Services;
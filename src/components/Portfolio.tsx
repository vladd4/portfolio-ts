import { FC } from "react";
import Image1 from '../img/Img1.png'
import Image2 from '../img/Img 2.png'
import Image3 from '../img/Img 3.png'
import Image4 from '../img/Img 4.png'
import Image5 from '../img/Img 5.png'
import Image6 from '../img/Img1.png'
import PortfolioCard from "./PortfolioCard";

const Portfolio:FC = () => {
    const PortfolioImages = [Image1, Image2, Image3, Image4, Image5, Image6]
    return (
        <section id="work" className="grid place-items-center bg-light-bg py-10 px-5">
            <h1 className="uppercase py-6 text-[calc(calc(1vh+1vw)*1.1)] font-semibold h-shadow">portfolio</h1>
            <div className="grid place-items-center grid-cols-3 py-5 gap-4 max-[650px]:grid-cols-2 max-[400px]:grid-cols-1">
                {PortfolioImages.map((img, index) => {
                    return (
                        <PortfolioCard key={index} source={img}></PortfolioCard>
                    )
                })}
            </div>
        </section>
    )
}
export default Portfolio;
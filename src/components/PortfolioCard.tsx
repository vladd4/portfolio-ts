import { FC } from "react";

interface PortfolioCardProps {
    source: string
}
const PortfolioCard:FC<PortfolioCardProps> = ({ source }) => {
    return (
        <div className="relative overlay-div max-[400px]:px-5">
            <img alt="Portfolio" src={source}></img>
            <div className="bg-main-blue grid place-items-center absolute top-0 w-full h-full opacity-0 overlay max-[400px]:w-[310px]">
                <p className="text-white text-[calc(calc(1vh+1vw)/1.3)] border-b cursor-pointer hover:opacity-70 transition-all duration-200">View Details</p>
            </div>
        </div>
    )
}
export default PortfolioCard;
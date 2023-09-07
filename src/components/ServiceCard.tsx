import { FC } from "react"

interface ServiceCardProps {
    id: string
    imgSrc: string
    textAlt: string
    textH: string
    textP: string
    imgSrcHover: string
}

const ServiceCard:FC<ServiceCardProps> = (props) => {
    return (
        <section id={props.id} className="group cursor-pointer flex-col flex justify-center items-center max-w-sm py-16 px-10 mb-10 hover:bg-main-blue hover:text-white transition-all duration-200 service-card max-[400px]:py-12 max-[400px]:px-5">
            <div className="img-div">
                <img src={props.imgSrc} alt={props.textAlt}></img>
                <img src={props.imgSrcHover} alt={props.textAlt}></img>
            </div>
            <h1 className="text-[calc(calc(1vh+1vw)/1.2)] pb-1 border-b border-b-main-blue group-hover:border-b-white">{props.textH}</h1>
            <p className="text-[calc(calc(1vh+1vw)/1.4)] py-5">{props.textP}</p>
        </section>
    )
}

export default ServiceCard
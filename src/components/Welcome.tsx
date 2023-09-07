import { FC } from "react";
import Header from "./Header";

const Welcome:FC = () => {
    return (
        <div id="welcome" className="h-screen bg-cover max-[650px]:h-[80vh] max-[650px]:bg-bottom max-[400px]:h-[75vh]">
            <Header></Header>
            <section className="absolute flex flex-col justify-center items-baseline top-1/2 left-1/2  -translate-y-1/2 max-w-lg max-[650px]:left-[45%] max-[650px]:top-[40%] max-[400px]:left-[5%] max-[400px]:top-[30%] max-[400px]:max-w-[250px]">
                <h1 className="text-[calc(calc(1vh+1vw)*1.2)] text-grey">Hello, I`m Vladyslav Donets</h1>
                <h5 className="text-[calc(calc(1vh+1vw)*1.5)] py-3 font-medium">Expert in Web Development & Design</h5>
                <p className="text-[calc(calc(1vh+1vw)/1.3)] pb-3 text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores quidem illum a quos provident, quas voluptatum aspernatur.</p>
                <button className="text-[calc(calc(1vh+1vw)/1.5)] font-medium uppercase border border-main-blue bg-main-blue text-white rounded-full py-3 px-10 hover:bg-transparent hover:text-main-blue transition-all duration-200 max-[400px]:py-2"><a href="#work">see my work</a></button>
            </section>
        </div>
    )
}

export default Welcome;
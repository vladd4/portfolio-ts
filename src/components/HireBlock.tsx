import { FC } from "react";
import { showModal } from "../modalController"

const HireBlock:FC = () => {
    return (
        <section className="flex justify-around items-center py-20 px-5">
            <div className="flex flex-col justify-center items-start max-w-3xl">
                <h1 className="text-[calc(calc(1vh+1vw)*1.2)] font-medium">Make It Awesome!</h1>
                <p className="text-[calc(calc(1vh+1vw)/1.3)] text-grey max-[650px]:max-w-xs max-[400px]:max-w-[110px]">There's nothing we wont try. Never heard the word impossible. This time there's no stopping us. The year is 1987 and NASA launches the last of Americas deep space probes.</p>
            </div>
            <button onClick={() => {showModal()}} className="border border-main-blue rounded-full text-main-blue text-[calc(calc(1vh+1vw)/1.4)] font-medium py-2 px-5 hover:bg-main-blue hover:text-white transition-all duration-200">Hire Me Now!</button>
        </section>
    )
}
export default HireBlock;
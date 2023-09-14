import { FC, useState } from "react";
import { handleSubmit } from "../utils/modalController";

const Modal:FC = () => {
    const [inputValue, setInputValue] = useState<string>('')
    return (
        <div id="modal" className="w-2/6 py-14 px-10 rounded-lg bg-light-bg top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 transition-all duration-500 opacity-0 max-[650px]:w-3/6 max-[400px]:w-5/6">
            <form className="grid place-items-center">
                <span onClick={() => {document.querySelector('#modal')?.classList.remove('open')}} className="absolute top-0 right-3 cursor-pointer text-lg hover:text-red transition-all duration-200">&#x2715;</span>
                <p className="text-[calc(calc(1vh+1vw)/1.2)] pb-5">Write your email and I will contact you back!</p>
                <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} className="text-[calc(calc(1vh+1vw)/1.4)] border w-full mb-2 py-1.5 px-2 rounded-md outline-none border-light_grey" type="email" placeholder="example@gmail.com"></input>
                <button onClick={(e) => {handleSubmit(e, inputValue)}} className="text-[calc(calc(1vh+1vw)/1.4)] border-main-blue font-medium border w-full py-1.5 bg-main-blue text-white rounded-md hover:text-main-blue hover:bg-white transition-all duration-200" type="submit">Send</button>
            </form>
        </div>    
    ) 
}
export default Modal;
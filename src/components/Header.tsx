import { FC } from "react"
import { showModal } from "../modalController"

const Header:FC = () => {
  return (
    <header className="flex justify-around items-center py-5 bg-light-bg">
        <h1 className=" text-[calc(calc(1vh+1vw)*1.2)] uppercase font-medium">Portfolio</h1>
        <nav className="flex justify-between gap-5 items-center">
            <a href="#welcome" className="text-[calc(calc(1vh+1vw)/1.3)] hover:opacity-60 transition-all duration-200">Home</a>
            <a href="#work" className="text-[calc(calc(1vh+1vw)/1.3)] hover:opacity-60 transition-all duration-200">Work</a>
            <a href="#blog" className="text-[calc(calc(1vh+1vw)/1.3)] hover:opacity-60 transition-all duration-200">Blog</a>
            <button onClick={() => {showModal()}} className="border border-main-blue rounded-full py-1 px-5 text-[calc(calc(1vh+1vw)/1.3)] hover:bg-main-blue hover:text-white transition-all duration-200 text-main-blue">Hire me!</button>
        </nav>
    </header>
  )
}

export default Header

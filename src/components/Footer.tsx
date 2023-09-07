import { FC } from "react";
import Facebook from '../img/facebook.png'
import Telegram from '../img/telegram.png'
import Link from '../img/link.png'
import Git from '../img/git.png'
import Copyright from "./Copyright";
const Footer:FC = () => {
    return (
        <>
        <footer className="flex flex-col justify-center items-center py-10 border-b-2 border-light-bg">
            <nav className="flex justify-evenly items-center gap-12 max-[400px]:gap-8">
                <a href="#welcome" className="text-[calc(calc(1vh+1vw)/1.2)] hover:opacity-60 transition-all duration-200">Home</a>
                <a href="#about" className="text-[calc(calc(1vh+1vw)/1.2)] hover:opacity-60 transition-all duration-200">About Me</a>
                <a href="#work" className="text-[calc(calc(1vh+1vw)/1.2)] hover:opacity-60 transition-all duration-200">Work</a>
                <a href="#feedback" className="text-[calc(calc(1vh+1vw)/1.2)] hover:opacity-60 transition-all duration-200">Blog</a>
            </nav>
            <div className="flex justify-evenly items-center gap-8 py-5 max-[650px]:gap-3">
                <a href="https://github.com/vladd4" target="_blank" rel="noreferrer"><img className="cursor-pointer w-10 opacity-30 hover:scale-125 hover:opacity-100 transition-all duration-200 max-[650px]:w-11/12" alt="Facebook Icon" src={Facebook}></img></a>
                <a href="https://github.com/vladd4" target="_blank" rel="noreferrer"><img className="cursor-pointer w-10 opacity-30 hover:scale-125 hover:opacity-100 transition-all duration-200 max-[650px]:w-11/12" alt="Linkedin Icon" src={Telegram}></img></a>
                <a href="https://github.com/vladd4" target="_blank" rel="noreferrer"><img className="cursor-pointer w-10 opacity-30 hover:scale-125 hover:opacity-100 transition-all duration-200 max-[650px]:w-11/12" alt="Instagram Icon" src={Link}></img></a>
                <a href="https://github.com/vladd4" target="_blank" rel="noreferrer"><img className="cursor-pointer w-10 opacity-30 hover:scale-125 hover:opacity-100 transition-all duration-200 max-[650px]:w-11/12" alt="Github Icon" src={Git}></img></a>
            </div>
            <div className="flex flex-col justify-center items-center">
                <a className="text-[calc(calc(1vh+1vw)/1.3)] hover:opacity-60 transition-all duration-200" href="tel:+380953067544">+380 95 306 7544</a>
                <a className="text-[calc(calc(1vh+1vw)/1.3)] hover:opacity-60 transition-all duration-200" href="mailto:donetsvlad44@gmail.com">donetsvlad44@gmail.com</a>
            </div>
        </footer>
        <Copyright></Copyright>
    </>
    )
}
export default Footer;
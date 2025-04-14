"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP , ScrollTrigger);

export default function Navbar() {

    useGSAP(() => {

        const navTl = gsap.timeline();

        navTl.set(".nav-container", {
            y: -100
        })
        .to(".nav-container" ,{
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
            duration: 1,
        })
    })
    
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <nav className="h-full nav-container w-full opacity-0 flex justify-between items-center sm:gap-56 py-7 sm:py-10">
            <div className="flex justify-between w-full">
                <h1><img src="name.svg" alt="webpage name" /></h1>
                <h2 className="text-md hidden sm:block text-white font-regular font-inter">
                Toronto, Canada / 1:12 PM
                </h2>
            </div>

            <div className="w-full flex justify-end  sm:justify-between sm:pl-32">
                <button onClick={() => scrollToSection("about")} className="text-white  hidden sm:block">
                    ( ABOUT )
                </button>
                <button className="text-white  hidden sm:block " onClick={() => scrollToSection("services")}>
                    ( SERVICES )
                </button>
                <button className="text-gray-900 bg-white px-4 font-semibold py-1 rounded-sm  hover:bg-[#b8ff34]  cursor-pointer transition-all duration-3000 ease-in-out " onClick={() => scrollToSection("contact")}>
                    CONTACT NOW
                </button>
            </div>
        </nav>
    )
}
"use client"
import { Timer } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero(){

    useGSAP(() => {

        const mainTl = gsap.timeline();

        mainTl.set(".right-container", {
            opacity: 0,
            x: 100
        }).set(".left-container", {
            opacity: 0,
            x: -100
        }).to(".right-container", {
            opacity: 1,
            x: 0,
            delay: 0.9,
            duration: 0.7,
            ease: "power1.out",
        }).set(".main.text", {
            opacity: 0,
            y: 10,
        }).to(".left-container", {
            opacity: 1,
            x:0,
            duration: 0.7,
            ease: "power1.out",
        }).to(".main-text", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 1,
            ease: "power1.out"
        })
        
    })

    return (
        <section className="h-full w-full flex overflow-clip flex-col sm:flex-row justify-between pt-20">
            <div className="w-full flex flex-col sm:w-7/12 pt-52 left-container opacity-0">
                <h2 className="flex uppercase text-xl font-inter items-center pb-4">
                    <Timer className="text-[#b8ff34] mr-2" />
                    Project will kickoff within 24 hours
                </h2>
                <h1 className= "text-7xl sm:text-[150px] leading-32 text-white flex-wrap font-semibold uppercase">
                <div className="flex items-end main-text opacity-0">
                VISUAL
                <div className="flex pb-2 pl-2">
                <div className="bg-white w-6 h-6 rounded-full z-10 " />
                    <div className="bg-black border -ml-2 border-white w-6 h-6 rounded-full " />
                </div>
                </div>
                <p className="flex z-10 relative main-text opacity-0">
                DESIGNER
                <img src="circle.svg" alt="circle image" className="absolute -right-28 -top-10 -z-10" />
                </p>
                </h1>
            </div>
            <div className="w-full flex-col right-container opacity-0 pl-7 sm:w-5/12">
                <video src="intro.mp4" className="pointer-events-none w-[250px]" autoPlay loop playsInline muted />
                <div className="text-md pr-20 font-inter font-semibold leading-5 uppercase line-clamp-4 pt-4">
                xotto® is a leadingleading strategic brand consultancy that positions and redefines the world's most exciting tech companies.
                </div>
            </div>
        </section>
    )
}
"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function SelectedWork() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".animation", {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="w-full overflow-clip h-full flex flex-col sm:flex-row py-24 space-y-7 sm:space-y-0">
            <div className="w-full sm:w-1/2 font-semibold font-inter sm:pr-12 text-center flex flex-col sm:text-start text-7xl sm:text-8xl">
                <span className="animation">
                    SELECTED
                </span>
                <span className="animation">
                    WORK
                </span>
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
                <div className="w-full flex justify-center sm:justify-end items-center">
                    <div className="w-6 mr-2 bg-white rounded-full h-6" />
                    <div className="bg-[#b8ff34] px-4 rounded-sm tracking-widest text-black font-semibold py-1">
                        EXPLORE
                    </div>
                </div>
                <h4 className="text-2xl text-white sm:pl-7 pt-5 flex text-center
                sm:text-end sm:justify-end items-center h-full">
                    Gorgeous design, Scroll-stopping content, Memorable campaigns, Development dripping with tech. The proof is in our projects.  
                </h4>
            </div>
        </section>
    )
}
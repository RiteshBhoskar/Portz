"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Footer() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".main-text", {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power1.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        })   
    })

    return (
        <section 
        ref={sectionRef} className="w-full h-full flex flex-col space-y-4 pb-4 pt-10">
          <div className="flex z-10 relative main-text overflow-clip">
            <h2 className="text-7xl sm:text-[240px] w-full font-semibold leading-none flex items-center justify-center z-10">JAURDEN</h2>
            <img
              src="circle.svg"
              alt="circle"
              className="absolute hidden sm:block right-0 bottom-[97px]"
            />
          </div>
          <div className="flex w-full bg-white h-[1px] rounded-full" />

          <div className="flex justify-between items-center">
            <span className="uppercase font-semibold text-xl">
            ©2025 design
            </span>
            <span className="uppercase font-semibold text-2xl flex items-center">
                
            <div className="flex pr-3">
              <div className="bg-white w-6 h-6 rounded-full z-10" />
              <div className="bg-black border -ml-2 border-white w-6 h-6 rounded-full" />
            </div>
             C-09, TORONTO
            </span>
          </div>
        </section>
    )
}
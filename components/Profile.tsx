"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Profile() {
    const sectionRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(".image", {
                scale: 1.1,
                transformOrigin: "center center",
        }, {
            scale: 0.9,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                scrub: true,
            }
        })
    }, { scope: sectionRef })

    return (
        <section 
        ref={sectionRef}
        className="h-full w-full flex flex-col pt-20">
            <div className="overflow-hidden flex justify-center items-center rounded-xl relative w-full h-[225px] sm:h-[600px]">
                <img
                src="dude.avif"
                alt="profile picture"
                className="image absolute w-full h-full"
                />
            </div>
            <div className="flex flex-col sm:flex-row justify-between pt-1">
                <div className="text-md font-inter flex flex-col font-semibold leading-5 uppercase pt-4">
                <span>
                Xotto® a leading strategic brand consultancy 
                </span>
                <span>
                that positions and redefines the world'.
                </span>
                </div>
                <div className="text-md font-inter font-semibold leading-5 underline uppercase pt-4">
                All rights reserved ©
                </div>
            </div>
        </section>
    )
}
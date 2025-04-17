"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Mandarin() {
    const sectionRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(".image", {
                scale: 1.1,
                transformOrigin: "center center",
        }, {
            scale: 1,
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
        className="h-full w-full flex flex-col pt-10">
            <div className="overflow-hidden flex justify-center items-center rounded-xl relative w-full h-[225px] sm:h-[600px]">
                <img
                src="mandarin.avif"
                alt="mandarin"
                className="image absolute w-full h-full object-cover" 
                />
            </div>
        </section>
    )
}
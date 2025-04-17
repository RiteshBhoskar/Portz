"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(useGSAP);

export default function About () {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".main-text", {
            opacity: 0,
            y: 100,
        },{
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
            duration: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="sm:py-20 h-full w-full flex flex-col">
            <div className="flex flex-col h-full w-full">
                <h3 className="text-white main-text flex text-7xl sm:text-[100px] font-semibold w-full">
                    ABOUT JAURDEN
                </h3>
                <div className="flex w-full items-center justify-between pt-5">
                    <p className="text-lg font-semibold w-full text-white uppercase">
                    toronto - based  startup to global visual design studio
                    </p>
                    <span className="w-full flex justify-center sm:justify-end items-center">
                    <div className="w-4 mr-2 bg-white rounded-full h-4" />
                    <div className="bg-[#b8ff34] px-4 rounded-sm tracking-widest text-black font-semibold py-1">
                        Let's work together
                    </div>
                </span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full h-full py-24 ">
                <div className="w-full sm:w-1/2 flex flex-col justify-between items-center sm:items-start">
                <img src="jaurden.avif" alt="profile image" className="rounded-md " />
                <button className="text-gray-900 flex justify-start bg-white px-4 font-semibold py-1 rounded-sm sm:mt-5 my-7 hover:bg-[#b8ff34]  cursor-pointer transition-all duration-3000 ease-in-out">
                    DOWNLOAD RESUME
                </button>
                </div>

                <div className="flex flex-col h-full w-full sm:w-1/2 space-y-4 px-5 sm:px-10">
                    <h5 className="text-xl font-semibold font-inter">
                        [ ABOUT ME ]
                    </h5>
                    <p className="font-semibold text-xl font-inter">
                    At Jaurden, we transform the way growing brands and Fortune 50’s show up across modern Media. Our team has a healthy obsession with motion. We live it, breathe it, and completely embrace its ability to capture the heart of your brand.
                    </p>
                    <p className="font-semibold text-xl uppercase pt-7 font-inter">
                    Honourable mention on Awwwards©
                    </p>
                    <div className="flex flex-col w-full h-full py-7">
                    <div className="w-full px-2 flex justify-between border-b-2 border-white py-4 text-black bg-white">
                        <p>
                            AWWWARD JURY
                        </p>
                        <ArrowUpRight />
                        <span>2024</span>
                    </div>
                    <div className="w-full flex justify-between border-b-2 hover:text-black hover:bg-white border-white py-4 px-2 text-white">
                        <p>
                            STUDIO OF THE YEAR
                        </p>
                        <ArrowUpRight />
                        <span>2023</span>
                    </div>
                    <div className="w-full flex justify-between border-b-2 hover:text-black hover:bg-white border-white py-4 px-2 text-white">
                        <p>
                            D & AD AWARDS
                        </p>
                        <ArrowUpRight />
                        <span>2021 , 2022</span>
                    </div>
                    <div className="w-full flex justify-between border-b-2 hover:text-black hover:bg-white border-white py-4 px-2 text-white">
                        <p>
                            RED DOT DESIGN AWARDS
                        </p>
                        <ArrowUpRight />
                        <span>2021</span>
                    </div>
                    </div>

                    <div className="py-5 flex flex-col">
                        <h4 className="text-xl font-semibold font-inter">
                            [ MY MISSION ]
                        </h4>
                        <p className="text-2xl pt-5 font-inter">
                            Transforming how brands express themselves across modern media.
                        </p>
                        <div className="text-lg mt-7 flex justify-end w-full font-semibold font-inter">
                            [ EST.2012 ]
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
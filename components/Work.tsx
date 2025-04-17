"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const workData = [
    {
        id: 1,
        title: "Planning",
        description: "Before we start, we determine if and how I can help you. What are your requirements for your new design? Why do you need a new design? What goals do you have in that, and what problem can we solve with a new design?",
        points: {
            1: "we get to know each other better",
            2: "determine how i can assist you best",
            3: "Understand the goals you have for the work"
        },
        image: "img1.svg"
    },
    {
        id: 2,
        title: "Concept & Strategy",
        description: "Once we have assessed your requirements and objectives, we move into the concept and strategy phase. Here, we define the overall vision and strategic approach for your design project. What are the core ideas we want to develop?",
        points: {
            1: "UX/UI Design",
            2: "Wireframes",
            3: "Interactive Prototype"
        },
        image: "img2.svg"
    },
    {
        id: 3,
        title: "Design Onboarding",
        description: "I’m thrilled to embark on this creative journey with you. My mission is to bring your vision to life with a collaborative and personalised design process.",
        points: {
            1: "Personal Workshop",
            2: "Personalised Video Tutorials",
            3: "Edit Text and Images directly on Website"
        },
        image: "img3.svg"
    }
];

export default function Work() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".main-heading", {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
            duration: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        })

        ScrollTrigger.matchMedia({
            "(min-width: 768px)" : () => {
                ScrollTrigger.create({
                    trigger: ".paper-image",
                    start: "top top+=70",
                    toggleActions: "play reverse play reverse",
                    pin: true,
                })
            }
        })

    }, { scope: sectionRef })

    return (
        <section className="flex flex-col h-full w-full py-40" ref={sectionRef}>
            <div className="flex flex-col w-full text-center h-full space-y-6 px-10">
                <h4 className="uppercase text-white text-2xl flex justify-center items-center  font-semibold">
                    Let me show you how i do
                </h4>
                <h3 className="uppercase text-white main-heading text-7xl flex justify-center items-center  font-semibold">
                    discover my work method
                </h3>
                <h4 className="uppercase text-white text-2xl flex justify-center items-center  font-semibold">
                    [ ©elevate your visual design with expert techniques and advicE ]
                </h4>
            </div>

            <div className="flex flex-col sm:flex-row justify-between h-full w-full pt-20 sm:space-x-20">
                <div className="w-full sm:w-1/2 paper-image">
                    <img src="paper.avif" alt="newspaper image" />
                </div>
                <div className="flex flex-col pt-7 sm:pt-0 h-full space-y-10 w-full sm:mr-5 sm:w-[500px]">
                    {workData.map((e) => (
                        <div key={e.id} className="flex flex-col h-full w-full">
                            <p className="font-semibold text-lg">
                                [ {e.id} ]
                            </p>
                            <div className="flex w-full justify-end py-2">
                                <img src={e.image} className="h-20 w-20" alt="random globe svg" />
                            </div>
                            <div className="flex flex-col space-y-7">
                            <h4 className="text-3xl uppercase font-semibold">
                                {e.title}
                            </h4>
                            <p className="text-2xl">
                                {e.description}
                            </p>
                            <ul className="text-xl capitalize">
                                <li>- {e.points[1]}</li>
                                <li>- {e.points[2]}</li>
                                <li>- {e.points[3]}</li>
                            </ul>
                            </div>
                            <div className="flex w-full bg-white h-[1px] rounded-full mt-7" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
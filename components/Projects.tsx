"use client"
import { projectsData } from "@/lib/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Projects() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.utils.toArray(".reveal-images").forEach((el: any) => {
            gsap.fromTo(el, {
                opacity: 0,
                y: 100,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                    toggleActions: "play reverse play reverse"
                }
            })
        })            
    }, { scope: sectionRef } )

    return (
        <section ref={sectionRef} className="h-full w-full overflow-clip flex flex-col sm:flex-row sm:flex-wrap">
            {projectsData.map((project) => (
                <div key={project.id} className="w-full sm:w-1/2 p-4 flex flex-col reveal-images ">
                    <div className="h-full w-full overflow-clip rounded-md">
                    <img src={project.image} alt="project image " className="rounded-md project-image  transition-transform duration-300 hover:cur hover:scale-105" />
                    </div>
                    <div className="flex justify-between text-xl font-inter font-semibold text-white py-7">
                        <h4 className="flex flex-col">
                            <span>
                            (COST©-{
                                project.cost
                            })
                            </span>
                            <span>
                            {project.title}
                            </span>
                        </h4>
                        <p className="items-end flex">
                            ({project.tag})
                        </p>
                        <p className="items-end flex">
                            [
                             {
                              project.id
                             }
                            ]
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}
"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Invite() {
  const containerRef = useRef(null);

  useGSAP(() => {
      gsap.fromTo(".left-container", {
        opacity: 0,
        x: -100,
      } , {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".left-container",
          start: "top 70%",
          toggleActions: "play reverse play reverse"
        }
      })
      gsap.fromTo(".right-container", {
        opacity: 0,
        x: 100,
      } , {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".right-container",
          start: "top 70%",
          toggleActions: "play reverse play reverse"
        }
      })

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="h-full w-full flex overflow-clip flex-col sm:flex-row justify-between pt-20"
    >
      <div className="w-full flex flex-col items-center justify-center text-center sm:w-7/12 left-container pt-7 opacity-0">
        <h2 className="text-8xl text-white font-semibold uppercase pb-7">
            LET'S MAKE YOUR DESIGN SHINE
        </h2>
        <p className="flex uppercase text-xl font-inter items-center pb-4">
        “collaborate with me to craft exceptional designs
        reflect your unique vision.”
        </p>
        <button className="text-gray-900 flex justify-start bg-white px-4 font-semibold py-1 rounded-sm sm:mt-5 my-7 hover:bg-[#b8ff34]  cursor-pointer transition-all duration-2000 ease-in-out">
                    CONTACT NOW
        </button>
        <div className="flex gap-1 sm:gap-7 pt-14">
            <span className="uppercase flex font-semibold underline">
                instagram
                <ArrowUpRight />
            </span>
            <span className="uppercase flex font-semibold underline">
                twitter
                <ArrowUpRight />
            </span>
            <span className="uppercase flex font-semibold underline">
                facebook
                <ArrowUpRight />
            </span>
        </div>
      </div>

      <div className="w-full h-full flex-col right-container opacity-0 sm:pl-7 sm:w-4/12 pt-7 sm:pt-0">
            <img src="profile.avif" alt="profile image" />
      </div>
    </section>
  );
}

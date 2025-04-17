"use client";
import { Timer } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            toggleActions: "play reverse play reverse"
        }
    });

    tl.set(".right-container", { opacity: 0, x: 100 })
      .set(".left-container", { opacity: 0, x: -100 })
      .set(".letter", { opacity: 0, y: 40 })
      .to(".right-container", {
        opacity: 1,
        x: 0,
        delay: 0.5,
        duration: 0.7,
        ease: "power1.out",
      })
      .to(".left-container", {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power1.out",
      })
      .to(".letter", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.inOut",
      });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="h-full w-full flex overflow-clip flex-col sm:flex-row justify-between pt-20"
    >
      <div className="w-full flex flex-col sm:w-7/12 sm:pt-52 left-container opacity-0">
        <h2 className="flex uppercase text-xl font-inter items-center pb-4">
          <Timer className="text-[#b8ff34] mr-2" />
          Project will kickoff within 24 hours
        </h2>

        <div className="text-[67px] sm:text-[150px] leading-[87px] sm:leading-32 text-white font-semibold uppercase">
          <div className="flex items-end">
            {"VISUAL".split("").map((char, i) => (
              <span key={`v-${i}`} className="inline-block letter">
                {char}
              </span>
            ))}

            <div className="flex pb-4 sm:pb-2 pl-4">
              <div className="bg-white w-6 h-6 rounded-full z-10" />
              <div className="bg-black border -ml-2 border-white w-6 h-6 rounded-full" />
            </div>
          </div>

          <div className="flex z-10 relative">
            {"DESIGNER".split("").map((char, i) => (
              <span key={`d-${i}`} className="inline-block letter">
                {char}
              </span>
            ))}
            <img
              src="circle.svg"
              alt="circle"
              className="absolute hidden sm:block -right-28 -top-10 -z-10"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex-col right-container opacity-0 sm:pl-7 sm:w-5/12 pt-7 sm:pt-0">
        <video
          src="intro.mp4"
          className="pointer-events-none sm:w-[250px]"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="text-md sm:pr-20 font-inter font-semibold leading-5 uppercase line-clamp-4 pt-4 text-center sm:text-start">
          xotto® is a leading strategic brand consultancy that positions and
          redefines the world's most exciting tech companies.
        </div>
      </div>
    </section>
  );
}

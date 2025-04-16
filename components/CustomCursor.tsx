"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const [hoveringProject, setHoveringProject] = useState(false);

    useEffect(() => {
        let x = 0, y = 0;
        let mouseX = 0, mouseY = 0;

        const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

        const render = () => {
            x = lerp(x, mouseX, 0.2);
            y = lerp(y, mouseY, 0.2);
            if (cursorRef.current) {
                cursorRef.current.style.left = `${x}px`;
                cursorRef.current.style.top = `${y}px`;
            }
            requestAnimationFrame(render);
        };
        render();

        const moveCursor = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseEnter = () => setHoveringProject(true);
        const handleMouseLeave = () => setHoveringProject(false);

        document.addEventListener("mousemove", moveCursor);

        const projectImages = document.querySelectorAll(".project-image");
        projectImages.forEach(img => {
            img.addEventListener("mouseenter", handleMouseEnter);
            img.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            projectImages.forEach(img => {
                img.removeEventListener("mouseenter", handleMouseEnter);
                img.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`pointer-events-none fixed z-50 
                ${hoveringProject ? 'w-16 h-8 font-semibold bg-white text-black font-inter tracking-[2.5px] text-xs' : 'w-12 h-12 bg-transparent rounded-full border border-gray-500'} 
                flex items-center justify-center font-medium uppercase 
                transition-all duration-200 ease-in-out 
                transform -translate-x-1/2 -translate-y-1/2`}
        >
            {hoveringProject && "View"}
        </div>
    );
}

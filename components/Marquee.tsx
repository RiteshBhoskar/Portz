import { Marquee } from "./magicui/marquee";

const imageData = [
    {
        id: 1,
        image: "/marquee/1.svg"
    },
    {
        id: 2,
        image: "/marquee/2.svg"
    },
    {
        id: 3,
        image: "/marquee/3.svg"
    },
    {
        id: 4,
        image: "/marquee/4.svg"
    },
    {
        id: 5,
        image: "/marquee/5.svg"
    },
    {
        id: 6,
        image: "/marquee/6.svg"
    },
    {
        id: 7,
        image: "/marquee/7.svg"
    },
]

export default function Markquee () {
    return (
        <section className="h-full w-full">
            <Marquee className="[--duration-20s] flex items-center">
                {imageData.map((e) => (
                    <div key={e.id} className="mx-10">
                        <img src={e.image} alt="images" className="h-12 w-auto" />
                    </div>
                ))}
            </Marquee>
        </section>
    )
}

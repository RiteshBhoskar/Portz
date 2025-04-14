import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col px-5 sm:px-10 bg-black">
      <Navbar />
      <Hero />
    </main>
  )
}
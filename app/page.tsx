import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Invite from "@/components/Invite";
import Mandarin from "@/components/Mandarin";
import Markquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import SelectedWork from "@/components/SelectedWork";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col px-5 sm:px-10 text-white overflow-clip bg-black">
      <Navbar />
      <Hero />
      <Profile />
      <SelectedWork />
      <Projects />
      <About />
      <Markquee />
      <Work />
      <Mandarin />
      <Invite />
      <Footer />
    </main>
  )
}
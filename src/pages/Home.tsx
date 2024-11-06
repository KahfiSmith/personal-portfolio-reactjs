import Motion from "@/components/Motion";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {

  return (
    <>
      <AuroraBackground>
        <Navbar />
        <Motion>
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-gray-700 text-center font-manrope tracking-wide">
            Mohamad Al-Kahfi
          </h1>
          <span className="text-sm md:text-base lg:text-lg text-white/80 text-center font-manrope tracking-wide -mb-4 px-16">
            An information engineering student with experience as a Frontend Web
            Developer.
          </span>
          <span className="text-sm md:text-base lg:text-lg text-white/80 text-center font-manrope tracking-wide px-16">
            Skilled in creating and optimizing visual elements and intuitive
            user interfaces.
          </span>
        </Motion>
      </AuroraBackground>
    </>
  );
}

import Motion from "@/components/Motion";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import useMediaQuery from "@/hooks/useMediaQuery.";
import { Download } from "lucide-react";

export default function Hero() {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <AuroraBackground>
        <Navbar />
        <Motion>
          <section
            className="flex flex-col items-center justify-center min-h-screen"
          >
            <h1 className="text-[40px] md:text-6xl lg:text-8xl font-extrabold text-center font-lora tracking-wide md:mb-5 mb-3 text-customText/60">
              Mohamad Al-Kahfi
            </h1>
            <div className="flex flex-col text-sm md:text-base text-customText text-center tracking-wide px-8 md:mb-6 mb-4 font-lora">
              <span className="mb-2 md:mb-1">
                An information engineering student with experience as a <span className="font-bold text-customTextV2/90">Frontend
                Web Developer</span> and <span className="font-bold text-customTextV2/90">UI/UX Designer</span>.
              </span>
              <span>
                Skilled in creating and optimizing visual elements and intuitive
                user interfaces.
              </span>
            </div>
            <a
              href="/CV.pdf"
              download="Mohamad_Al-Kahfi_CV.pdf"
              className="flex justify-center font-lora items-center md:space-x-4 space-x-2 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-gradient-to-r from-[#273751] to-[#182237] text-customText rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-[#2b3c57]/70 shadow-lg shadow-[#2b3c57]/50 border-1 border-white/10
          "
            >
              <Download size={isMediumScreen ? 24 : 18} />
              <span>Download Resume</span>
            </a>
          </section>
        </Motion>
      </AuroraBackground>
    </>
  );
}

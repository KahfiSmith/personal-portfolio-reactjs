import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useMediaQuery } from "@/hooks";
import { Download } from "lucide-react";

export default function Hero() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <AuroraBackground>
        <Navbar />
        <section className="flex flex-col items-center justify-center min-h-screen relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center font-lora tracking-wide md:mb-5 mb-3 text-customText/60">
            Mohamad Al-Kahfi
          </h1>
          <div className="flex flex-col text-sm md:text-base text-customText text-center tracking-wide px-8 md:mb-6 mb-4 font-lora">
            <span className="mb-2 md:mb-1">
              An information engineering student with experience as a{" "}
              <span className="font-bold text-customTextV2/80">
                Frontend Web Developer
              </span>{" "}
              and{" "}
              <span className="font-bold text-customTextV2/80">
                UI/UX Designer
              </span>
              .
            </span>
            <span>
              Skilled in creating and optimizing visual elements and intuitive
              user interfaces.
            </span>
          </div>
          <a
            href="/CV.pdf"
            download="Mohamad_Al-Kahfi_CV.pdf"
            className="flex justify-center font-lora items-center lg:space-x-4 space-x-2 px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base bg-gradient-to-r from-[#273751] to-[#182237] text-customText rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-[#2b3c57]/70 shadow-lg shadow-[#2b3c57]/50 border-1 border-white/10 hover:scale-105 duration-500
          "
          >
            <Download size={isLargeScreen ? 24 : 18} />
            <span>Download Resume</span>
          </a>
        </section>
      </AuroraBackground>
    </>
  );
}

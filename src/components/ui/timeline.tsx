import { ExperienceItemProps } from "@/types";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }: { data: ExperienceItemProps[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <h2 className="md:text-2xl mb-2 w-1/2 font-medium">Experience</h2>
        <p className="text-sm md:text-base max-w-sm">
          This is my experience from 2023 to 2024.
        </p>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto pb-28">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-20 md:pt-30 md:gap-20"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-md md:w-full">
              <div className="h-6 absolute left-5 md:left-5 w-6 rounded-full bg-customSoft flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-customText border border-customText p-1" />
              </div>
              <div className="hidden md:block md:pl-20">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-base">{item.company}</p>
                <p className="text-sm">{item.date}</p>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pr-0 md:pl-4 w-full -mt-1 md:-mt-0">
              <h3 className="md:hidden block text-2xl mb-2 text-left font-bold">
                {item.title}
              </h3>
              <p className="md:hidden text-base">{item.company}</p>
              <p className="md:hidden text-sm mb-5">{item.date}</p>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

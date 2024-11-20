import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function useScrollClick() {
  const { scrollY } = useScroll();
  const [scrollYValue, setScrollYValue] = useState(0);

  useEffect(() => {
    const handleScroll = (latest: number) => {
      setScrollYValue(latest);
    };

    const unsubscribe = scrollY.on("change", handleScroll);

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  return scrollYValue;
}

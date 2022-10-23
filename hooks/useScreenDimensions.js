import { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });
  const [scrollXY, setScrollXY] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      const { innerHeight, innerWidth } = window;
      setWindowSize({
        height: innerHeight,
        width: innerWidth,
      });
    };

    const handleWindowScroll = () => {
      const { scrollX, scrollY } = window;
      setScrollXY({ x: scrollX, y: scrollY });
    };

    handleWindowResize();

    window.addEventListener("resize", () => handleWindowResize());
    window.addEventListener("scroll", () => handleWindowScroll());

    return () => {
      window.removeEventListener("resize", () => handleWindowResize());
      window.removeEventListener("scroll", () => handleWindowScroll());
    };
  }, []);

  return { windowSize, scrollXY };
};
export default useWindowSize;

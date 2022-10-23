import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      const { innerHeight, innerWidth } = window;

      setWindowSize({
        height: innerHeight,
        width: innerWidth,
      });
    };

    handleWindowResize();

    window.addEventListener("resize", () => handleWindowResize());

    return () => {
      window.removeEventListener("resize", () => handleWindowResize());
    };
  }, []);

  return windowSize;
};
export default useWindowSize;

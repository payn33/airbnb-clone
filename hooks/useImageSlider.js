import { useState, useEffect } from "react";

const useImageSlider = ({ images, hover }) => {
  const [image, setImage] = useState(images[0]);
  const [index, setIndex] = useState(0);
  const [showArrows, setShowArrows] = useState({ prev: false, next: false });
  const [animDir, setAnimDir] = useState("");

  const nextSlide = () => {
    if (index !== images.length - 1) {
      setImage(images[index + 1]);
      setIndex(index + 1);
      setShowArrows({ prev: true, next: true });
    }
    setAnimDir("next");
  };

  const prevSlide = () => {
    if (index !== 0) {
      setImage(images[index - 1]);
      setIndex(index - 1);
      setShowArrows({ prev: true, next: true });
    }
    setAnimDir("prev");
  };

  useEffect(() => {
    index === images.length - 1 && setShowArrows({ prev: true, next: false });
    hover === true &&
      setShowArrows({
        prev: index > 0 ? true : false,
        next: index !== images.length - 1 ? true : false,
      });
    hover === false &&
      (index === 0) &
        setShowArrows({
          prev: false,
          next: false,
        });
    // index === 0 && setShowArrows({ prev: false, next: true });
  }, [index, images.length, hover]);
  return {
    image,
    index,
    nextSlide,
    prevSlide,
    showArrows,
    animDir,
  };
};

export default useImageSlider;

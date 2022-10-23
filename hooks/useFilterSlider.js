import { useState, useEffect } from "react";
import filterData from "../helpers/filterSliderData";

const useFilterSlider = () => {
  const sliceIdx = 7;
  const [slideData, setSlideData] = useState(filterData);
  const [slideIdx, setSlideIdx] = useState(7);
  const [showArrows, setShowArrows] = useState({ prev: false, next: true });

  //filterData.length - slideIdx to get animation speed and controls

  const nextSlide = () => {
    if (slideIdx !== filterData.length - 1) {
      const slice = filterData.slice(slideIdx, filterData.length);

      filterData[slideIdx - 1] && slice.unshift(filterData[slideIdx - 1]);
      filterData[slideIdx - 2] && slice.unshift(filterData[slideIdx - 2]);
      setSlideData(slice);
      setSlideIdx(slideIdx + 7);
      setShowArrows({ prev: true, next: true });
    }

    return () => {};
  };

  useEffect(() => {
    slideIdx === 7 && setShowArrows({ prev: false, next: true });
    slideIdx === filterData.length &&
      setShowArrows({ prev: true, next: false });
  }, [slideIdx]);

  const prevSlide = () => {
    if (slideIdx !== 7) {
      const slice = filterData.slice(0, slideIdx);

      setShowArrows({ prev: true, next: true });

      setSlideData(slice);
      setSlideIdx(slideIdx - 7);
    }
  };

  return { prevSlide, nextSlide, slideData, showArrows };
};

export default useFilterSlider;

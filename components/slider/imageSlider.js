import { useRef, useEffect, useState, forwardRef } from "react";
import Slider from ".";
import useImageSlider from "../../hooks/useImageSlider";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Heart from "./heart";
import Dots from "./dots";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Anim = styled(Div)`
  position: relative;
`;

const ImageSlider = (props) => {
  const { images, ...rest } = props;

  const [hover, setHover] = useState(false);

  const { image, index, nextSlide, prevSlide, showArrows, animDir } =
    useImageSlider({
      images,
      hover,
    });

  const direction = animDir === "next" ? next : animDir === "prev" ? prev : "";

  return (
    <Div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Slider
        next={() => nextSlide()}
        prev={() => prevSlide()}
        showArrows={showArrows}
        btnBg={"transparent"}
        dot
      >
        <Heart />
        <Anim animate={index === images.indexOf(image) ? direction : ""}>
          <Image
            alt={image.alt}
            src={image.src}
            layout={"fill"}
            width={"100%"}
            height={"100%"}
          />
        </Anim>

        {rest.dot && <Dots index={index} totalItems={images.length} />}
      </Slider>
    </Div>
  );
};

export default ImageSlider;

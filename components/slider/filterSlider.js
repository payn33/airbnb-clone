import styled from "styled-components";
import Slider from "./";
import useFilterSlider from "../../hooks/useFilterSlider";
import Image from "next/image";
import { useState } from "react";
import filterData from "../../helpers/filterSliderData";
import { AnimatePresence, motion } from "framer-motion";

const SlideItem = styled.span`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  z-index: 5;
`;

const SlideItemOverlay = styled.span`
  display: inline-block;
  position: absolute;
  z-index: 10;
  height: 80px;
  cursor: pointer;
  width: 100%;
  position: absolute;
  transition: all 0.3s ease;
  &:hover {
    background: transparent;
  }

  ${({ clicked }) => (clicked ? clicked : "")}
`;

const P = styled.p`
  font-size: ${({ size }) => size ?? size}px;
  font-weight: ${({ weight }) => weight ?? weight};
  color: ${({ color }) => color ?? color};
  text-overflow: ellipsis;
`;
const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-self: center;
  grid-column-gap: 32px;
  width: 100%;
`;

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 10;
`;

const inactive = `
background: #fff;
opacity: 0.4;
&:hover&::after {
  content: "";
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 2.5px;
  background: #ddd;
  bottom: 0;
  transition: all 0.3s ease;
}`;

const active = `&::before {
  content: "";
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 2.5px;
  background: #000;
  bottom: 0;
  transition: all 0.3s ease;
}`;

//2 animations using keyframes, entry and exit
//entry starts from x:0 to - whatever on the axis for leave
//entry starts from

//or one animation, seeing as the elements not the components change

const FilterSlide = () => {
  const { slideData, prevSlide, nextSlide, showArrows } = useFilterSlider();
  const [clicked, setClicked] = useState(slideData[0].id);

  return (
    <>
      <Slider
        next={() => nextSlide()}
        prev={() => prevSlide()}
        showArrows={showArrows}
        height={"80px"}
      >
        <Grid>
          <AnimatePresence initial={false}>
            {slideData.map((ctx) => (
              <SlideItem
                as={motion.span}
                onClick={() => setClicked(ctx.id)}
                key={ctx.id}
                className="click"
              >
                <SlideItemOverlay
                  clicked={clicked === ctx.id ? active : inactive}
                />
                <Image alt="" src={ctx.icon} width={24} height={24} />
                <P size={12}>{ctx.text}</P>
              </SlideItem>
            ))}
          </AnimatePresence>
        </Grid>
      </Slider>
    </>
  );
};

const FilterSlideMobile = () => {
  const [clicked, setClicked] = useState(filterData[0].id);

  return (
    <Div>
      <Grid>
        {filterData.map((ctx) => (
          <SlideItem key={ctx.id} onClick={() => setClicked(ctx.id)}>
            <SlideItemOverlay
              clicked={clicked === ctx.id ? active : inactive}
            />
            <Image alt="" src={ctx.icon} width={24} height={24} />
            <P size={12}>{ctx.text}</P>
          </SlideItem>
        ))}
      </Grid>
    </Div>
  );
};
export default FilterSlide;

export { FilterSlideMobile };

import styled from "styled-components";
import SliderBtn from "./sliderButton";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${({ height }) => (height ? height : "100%")};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Slider = (props) => {
  const { children, next, prev, showArrows, ...rest } = props;

  return (
    //add on mouse enter and on mouse leave to control button visibility
    //also on scroll events all on the slider component using e.currentTarget | e.target
    <Container
      height={rest.height}
      //   onMouseEnter={() => console.log("hovering")}
    >
      <SliderBtn
        direction={"next"}
        moveSlide={() => next()}
        showNext={showArrows.next}
        btnBg={rest.btnBg}
      />
      <SliderBtn
        direction={"prev"}
        moveSlide={() => prev()}
        showPrev={showArrows.prev}
        btnBg={rest.btnBg}
      />
      {children}
    </Container>
  );
};

export default Slider;

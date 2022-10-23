import styled from "styled-components";

const ButtonWrapper = styled.span`
  position: absolute;
  display: inline-flex;
  top: 50%;
  background: transparent;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;

const ButtonBorder = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #ddd;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 1px 2.5px 1px #ddd;
  }
`;

//   ${({ custom }) =>
// custom
// ? custom
// : `  &::before {
// content:"";
// background: linear-gradient(
// to right,
//  rgb(255 255 255) 0%,
// rgb(255 255 255) 65%,
// rgba(0,0,0,0) 100%);
// height: 80px;
// width: 80px;
// position: absolute;
// z-index: -1;
// };`}

const PrevButton = styled(ButtonWrapper)`
  visibility: ${({ show }) => (!show ? "hidden" : "")};
  background: ${({ bg }) =>
    bg
      ? bg
      : `linear-gradient(
        to right,
        rgb(255 255 255) 0%,
        rgb(255 255 255) 65%,
        rgba(0, 0, 0, 0) 100%
      )`};
  left: -20px;
`;

// ${({ custom }) =>
// custom
//   ? custom
//   : `  &::before {
// content:"";
// background: linear-gradient(
// to left,
//  rgb(255 255 255) 0%,
// rgb(255 255 255) 65%,
// rgba(0,0,0,0) 100%);
// height: 80px;
// width: 80px;
// position: absolute;
// z-index: -1;
// };`};

const NextButton = styled(ButtonWrapper)`
  visibility: ${({ show }) => (!show ? "hidden" : "")};
  background: ${({ bg }) =>
    bg
      ? bg
      : `linear-gradient(
        to left,
        rgb(255 255 255) 0%,
        rgb(255 255 255) 65%,
        rgba(0, 0, 0, 0) 100%
      )`};
  right: -20px;
`;

const SliderBtn = (props) => {
  const { direction, moveSlide, showPrev, showNext, ...rest } = props;

  return (
    <>
      {direction === "prev" ? (
        <PrevButton
          onClick={() => moveSlide()}
          show={showPrev}
          direction={direction}
          bg={rest.btnBg}
        >
          <ButtonBorder>
            <svg
              width="9"
              height="12"
              viewBox="0 0 17 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5859 26L3.29305 14.7071C2.90252 14.3166 2.90252 13.6834 3.29305 13.2929L14.5859 2"
                stroke="black"
                strokeWidth="5.33333"
              />
            </svg>
          </ButtonBorder>
        </PrevButton>
      ) : (
        <NextButton
          onClick={() => moveSlide()}
          show={showNext}
          direction={direction}
          bg={rest.btnBg}
        >
          <ButtonBorder>
            <svg
              width="9"
              height="12"
              viewBox="0 0 17 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L13.2929 13.2929C13.6834 13.6834 13.6834 14.3166 13.2929 14.7071L2 26"
                stroke="black"
                strokeWidth="5.33333"
              />
            </svg>
          </ButtonBorder>
        </NextButton>
      )}
    </>
  );
};

export default SliderBtn;

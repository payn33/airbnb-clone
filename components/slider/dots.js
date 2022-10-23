import styled from "styled-components";

const DotContainer = styled.div`
  position: absolute;
  bottom: 5%;
  width: 100%;
  max-width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Dot = styled.div`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 5px;
  z-index: 15;
  background: #cccbcb;
  transition: all 0.3s ease;
  &:nth-child(1) {
    transform: scale(0.7);
    ${({ styles }) => (styles ? styles : "")}
  }
  &:nth-child(2) {
    transform: scale(0.9);
    ${({ styles }) => (styles ? styles : "")}
  }
  &:nth-child(3) {
    // background: red !important;
    ${({ styles }) => (styles ? styles : "")}
  }
  &:nth-child(4) {
    transform: scale(0.9);
    ${({ styles }) => (styles ? styles : "")}
  }
  &:nth-child(5) {
    transform: scale(0.7);
    ${({ styles }) => (styles ? styles : "")}
  }
`;

const Dots = (props) => {
  //if less than 3, if greater than 3 if data.length -index-1 < 3
  //index === 0, index === 1
  //index === data.length -1
  //index === data.length -2
  //   const start =
  const active = `
  background:#fff;
  transform: scale(1);
  `;
  const { index, totalItems } = props;

  return (
    <DotContainer>
      <Dot styles={index === 0 ? active : ""} />
      <Dot styles={index > 0 && index < 2 ? active : ""} />
      <Dot styles={index >= 2 && index < totalItems - 2 ? active : ""} />
      <Dot styles={index === totalItems - 2 ? active : ""} />
      <Dot styles={index === totalItems - 1 ? active : ""} />
    </DotContainer>
  );
};
export default Dots;

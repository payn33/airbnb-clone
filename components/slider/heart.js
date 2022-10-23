import { useState } from "react";
import styled from "styled-components";

const _Heart = styled.div`
  position: absolute;
  top: 5%;
  right: 6%;
  z-index: 15;
  cursor: pointer;
`;

const Heart = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <_Heart onClick={() => setClicked(!clicked)}>
      <svg
        width="22"
        height="24"
        viewBox="0 0 30 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 25C22 20.267 29 15 29 8C29 6.208 28.317 4.417 26.95 3.05C25.583 1.684 23.792 1 22 1C20.209 1 18.417 1.684 17.051 3.05L15 5.101L12.95 3.05C11.583 1.684 9.792 1 8 1C6.209 1 4.417 1.684 3.051 3.05C1.684 4.417 1 6.208 1 8C1 15 8 20.267 15 25Z"
          fill={clicked ? "red" : "#727272"}
          fillOpacity={clicked ? "1" : "0.5"}
          stroke={clicked ? "red" : "#fff"}
          strokeWidth="2"
        />
      </svg>
    </_Heart>
  );
};

export default Heart;

import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 10px 0;
  justify-content: space-between;
  max-width: 40%;
  margin: 0 auto;
  @media (min-width: 744px) {
    display: none;
  }
`;

const Icon = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const P = styled.p`
  padding-top: 3px;
  font-size: 10px;
`;
const FooterMobile = () => {
  const [clicked, setClicked] = useState(0);
  return (
    <Container>
      <Icon onClick={() => setClicked(0)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L30 30M13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24Z"
            stroke={clicked === 0 ? "#ff385c" : "#ddd"}
            strokeWidth="3"
          />
        </svg>
        <P>Explore</P>
      </Icon>
      {/* ff385c */}

      <Icon onClick={() => setClicked(1)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 26C23 21.267 30 16 30 9C30 7.208 29.317 5.417 27.95 4.05C26.583 2.684 24.792 2 23 2C21.209 2 19.417 2.684 18.051 4.05L16 6.101L13.95 4.05C12.583 2.684 10.792 2 9 2C7.209 2 5.417 2.684 4.051 4.05C2.684 5.417 2 7.208 2 9C2 16 9 21.267 16 26Z"
            stroke={clicked === 1 ? "#ff385c" : "#ddd"}
            strokeWidth="2.66667"
          />
        </svg>
        <P>Wishlists</P>
      </Icon>

      <Icon onClick={() => setClicked(2)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0ZM15 8C12.2386 8 10 10.2386 10 13C10 15.0144 11.2022 16.7999 12.9996 17.5835L13 19.682L12.85 19.7098C10.0173 20.2712 7.53099 21.9329 5.9142 24.2971C8.25763 26.5882 11.4639 28 15 28C18.5356 28 21.7415 26.5886 24.085 24.2985C22.4708 21.9357 19.9872 20.2738 17.1558 19.7117L17 19.683L17.0012 17.5839C18.73 16.8291 19.9079 15.1481 19.9948 13.2284L20 13C20 10.2386 17.7614 8 15 8V8ZM15 2C7.8203 2 2 7.8203 2 15C2 17.9046 2.95257 20.5867 4.56236 22.7509C5.98311 20.8374 7.90187 19.3507 10.101 18.4553L10.449 18.319L10.426 18.3C8.989 17.0589 8.08141 15.2544 8.00521 13.2715L8 13C8 9.13401 11.134 6 15 6C18.866 6 22 9.13401 22 13C22 14.9941 21.1585 16.828 19.7754 18.1194L19.55 18.32L19.5948 18.3363C21.9216 19.2155 23.9518 20.7502 25.4378 22.7491C27.0477 20.5858 28 17.9041 28 15C28 7.8203 22.1797 2 15 2V2Z"
            fill={clicked === 2 ? "#ff385c" : "#ddd"}
          />
        </svg>
        <P>Log in</P>
      </Icon>
    </Container>
  );
};

export default FooterMobile;
//explore wishlist login

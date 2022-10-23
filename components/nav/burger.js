import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: transparent;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  min-width: 250px;
  position: relative;
`;

const Button = styled.button`
  position: relative;
  background: transparent;
  font-weight: 400;
  font-size: 0.9rem;
  cursor: pointer;
  height: 45px;
  transition: all 0.3s ease;
  border-radius: 32px;
  padding: 0px 10px;
  &:hover {
    background: #f7f7f7;
  }
`;

const Web = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 32px;
  margin: 0px 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: #f7f7f7;
  }
`;

const P = styled.p`
  font-size: ${({ size }) => size ?? size}px;
  font-weight: ${({ weight }) => weight ?? weight};
  color: ${({ color }) => color ?? color};
`;

const MenuChild = styled(P)`
  cursor: pointer;
  display: block;
  padding: 14px;
  &:hover {
    background: #f7f7f7;
  }
`;

const Line = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background: #ddd;
  margin: 5px 0;
`;

const _Burger = styled.span`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 32px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 1px 2.5px 1px #ddd;
  }
`;

const _BurgerChild = styled(Container)`
  align-items: center;
  justify-content: space-between;
  min-width: 72px;
  padding: 5px 5px 5px 12px;
`;

const Menu = styled(Container)`
  position: absolute;
  display: inline-block;
  background: #fff;
  border-radius: 16px;
  padding: 8px 0px;
  bottom: -272px;
  right: 0;
  min-width: 250px;
  z-index: 15;
`;
//set timeout on svg to show red notification
//on click remove notification

const Burger = (props) => {
  const { width } = props;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleBurgerAction = () => {
    return setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.onclick = (e) => {
      if (!e.target.classList.contains("menuRef")) setShowMenu(false);
    };
  }, []);

  return (
    <Container>
      <Button>
        <P>Become a Host</P>
      </Button>

      <Web>
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.36 12C14.44 11.34 14.5 10.68 14.5 10C14.5 9.32 14.44 8.66 14.36 8H17.74C17.9 8.64 18 9.31 18 10C18 10.69 17.9 11.36 17.74 12M12.59 17.56C13.19 16.45 13.65 15.25 13.97 14H16.92C15.9512 15.6683 14.4141 16.932 12.59 17.56M12.34 12H7.66C7.56 11.34 7.5 10.68 7.5 10C7.5 9.32 7.56 8.65 7.66 8H12.34C12.43 8.65 12.5 9.32 12.5 10C12.5 10.68 12.43 11.34 12.34 12ZM10 17.96C9.17 16.76 8.5 15.43 8.09 14H11.91C11.5 15.43 10.83 16.76 10 17.96ZM6 6H3.08C4.03886 4.32721 5.5748 3.06149 7.4 2.44C6.8 3.55 6.35 4.75 6 6ZM3.08 14H6C6.35 15.25 6.8 16.45 7.4 17.56C5.57862 16.9317 4.04485 15.6677 3.08 14M2.26 12C2.1 11.36 2 10.69 2 10C2 9.31 2.1 8.64 2.26 8H5.64C5.56 8.66 5.5 9.32 5.5 10C5.5 10.68 5.56 11.34 5.64 12M10 2.03C10.83 3.23 11.5 4.57 11.91 6H8.09C8.5 4.57 9.17 3.23 10 2.03M16.92 6H13.97C13.657 4.76146 13.1936 3.5659 12.59 2.44C14.43 3.07 15.96 4.34 16.92 6ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0Z"
            fill="black"
          />
        </svg>
      </Web>

      <_Burger onClick={handleBurgerAction}>
        <_BurgerChild className="menuRef">
          <svg
            width="16"
            height="16"
            viewBox="0 0 42 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="menuRef"
          >
            <path
              className="menuRef"
              d="M1 1H41M1 11H41M1 21H41"
              stroke="black"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="menuRef"
          >
            <path
              className="menuRef"
              d="M15.9992 0.700195C7.56222 0.700195 0.699219 7.5632 0.699219 16.0002C0.699219 24.4372 7.56222 31.3002 15.9992 31.3002C24.4362 31.3002 31.2992 24.4372 31.2992 16.0002C31.2992 7.5632 24.4362 0.700195 15.9992 0.700195V0.700195ZM15.9992 28.7002C11.9782 28.7002 8.39422 26.8162 6.06622 23.8902C7.68783 21.7684 9.94991 20.2255 12.5172 19.4902C11.5928 18.903 10.8316 18.092 10.304 17.1323C9.77646 16.1726 9.49965 15.0953 9.49922 14.0002C9.49922 10.4162 12.4152 7.5002 15.9992 7.5002C19.5832 7.5002 22.4992 10.4162 22.4992 14.0002C22.4983 15.0955 22.2212 16.1728 21.6935 17.1326C21.1658 18.0924 20.4046 18.9036 19.4802 19.4912C22.048 20.226 24.3106 21.7689 25.9322 23.8912C23.6042 26.8162 20.0202 28.7002 15.9992 28.7002Z"
              fill="#717171"
            />
          </svg>
        </_BurgerChild>
      </_Burger>

      {showMenu && (
        <Menu className="menuRef" ref={menuRef}>
          <MenuChild className="menuRef">Sign up</MenuChild>
          <MenuChild border weight={400} className="menuRef" color={"#505050"}>
            Login
          </MenuChild>
          <Line />
          <MenuChild weight={400} className="menuRef" color={"#505050"}>
            Host your Home
          </MenuChild>
          <MenuChild weight={400} className="menuRef" color={"#505050"}>
            Host an Experience
          </MenuChild>
          <MenuChild weight={400} className="menuRef" color={"#505050"}>
            Help
          </MenuChild>
        </Menu>
      )}
    </Container>
  );
};

export default Burger;

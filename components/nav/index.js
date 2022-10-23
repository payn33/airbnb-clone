import styled from "styled-components";
import Logo from "./logo";
import Search, { SearchMobile } from "./search";
import Burger from "./burger";
import Filter from "../filter";
import useWindowSize from "../../hooks/useScreenDimensions";

const Container = styled.div`
  height: 80px;
  padding: ${({ width }) =>
    width <= 744 ? "14px 24px 0px" : width <= 1440 ? "0px 40px" : "0px 80px"};

  border-bottom: ${({ width }) => (width < 744 ? "0" : "1px solid #ddd")};
`;

const Div = styled.div`
  ${({ scroll }) => scroll ?? scroll}
`;

const _Search = styled.div`
  background: transparent;
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (min-width: 744px) {
    display: flex;
  }
`;

const _SearchMobile = styled.div`
  display: block;
  @media (min-width: 744px) {
    display: none;
  }
`;

const Nav = (props) => {
  const { windowSize, scrollXY } = useWindowSize();

  const scroll = `
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 15;
  width: 100%;
  background: #fff;
  `;

  return (
    <Div scroll={scrollXY.y > 0 ? scroll : ""}>
      <Container width={windowSize.width}>
        <_Search>
          <Logo width={windowSize.width} />
          <Search width={windowSize.width} />
          <Burger width={windowSize.width} />
        </_Search>

        <_SearchMobile>
          <SearchMobile />
        </_SearchMobile>
      </Container>
      <Filter width={windowSize.width} />
    </Div>
  );
};

export default Nav;

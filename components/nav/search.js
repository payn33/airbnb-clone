import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: transparent;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 32px;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0.5px #ddd;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 2px 2.5px 1px #ddd;
  }
`;

const Button = styled.button`
  position: relative;
  background: transparent;
  font-weight: 400;
  font-size: 0.9rem;
  cursor: pointer;
  color: ${({ dim }) => (dim ? "#7c7c7c" : "#222")};
  height: 48px;

  &::after {
    content: "";
    display: ${({ dim }) => (dim ? "none" : "inline")};
    position: absolute;
    height: 50%;
    background-color: #ddd;
    top: 25%;
    right: 0;
    width: 1px;
  }
`;

const SearchButton = styled(Button)`
  display: inline-flex;
  align-items: center;
`;

const P = styled.p`
  padding: ${({ padding }) => (padding ? "0 10px" : "0")};
  font-size: ${({ size }) => size ?? size}px;
  font-weight: ${({ weight }) => weight ?? weight};
  color: ${({ color }) => color ?? color};
  text-overflow: ellipsis;
`;

const _Search = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ff385c;
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const ContainerMobile = styled(Container)`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 32px;
  height: 55px;
  box-shadow: 0px 2px 15.5px 1px #ddd;
  &:hover {
    box-shadow: 0px 2px 15.5px 1px #ddd;
  }
`;

const Span = styled.span`
  display: inline-block;
  padding: 0px 14px 0px 20px;
`;

const Dot = styled.span`
  display: inline-block;
  width: 2px;
  height: 2px;
  margin: 0 5px;
  background: #858585;
  border-radius: 2px;
`;

const Div = styled.div`
  display: ${({ display }) => (display ? display : "inline-block")};
  width: fill-available;
`;

const Flex = styled(Div)`
  display: flex;
  align-items: ${({ align }) => align ?? align};
  justify-content: ${({ justify }) => justify ?? justify};
`;

const MobileFilterButton = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  width: 36px;
  margin-right: 14px;
  border-radius: 50px;
`;

const Search = (props) => {
  return (
    <Container>
      <Button>
        <P padding>Anywhere</P>
      </Button>
      <Button>
        <P padding>Any week</P>
      </Button>
      <SearchButton dim>
        <P padding>Add guests</P>
        <_Search>
          <i className="fas fa-search fa-sm"></i>
        </_Search>
      </SearchButton>
    </Container>
  );
};

const SearchMobile = (props) => {
  return (
    <ContainerMobile>
      <Span>
        <i className="fas fa-search fa-sm" color={"#505050"}></i>
      </Span>

      <Div>
        <Flex justify={"space-between"}>
          <Div>
            <P>Where to?</P>
            <Flex align={"center"}>
              <P color={"#505050"} weight={300} size={12}>
                Anywhere
              </P>
              <Dot />
              <P color={"#505050"} weight={300} size={12}>
                Any week
              </P>
              <Dot />
              <P color={"#505050"} weight={300} size={12}>
                Add guests
              </P>
            </Flex>
          </Div>

          <MobileFilterButton>
            <svg
              width="12"
              height="12"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.99989 6C5.30589 6 6.41789 6.835 6.82989 8H12.9999V10H6.82889C6.64571 10.5189 6.32338 10.9774 5.89716 11.3255C5.47093 11.6735 4.95722 11.8977 4.41218 11.9734C3.86715 12.0492 3.31178 11.9736 2.80679 11.755C2.30181 11.5364 1.86665 11.1831 1.54891 10.7339C1.23116 10.2846 1.04306 9.75661 1.00517 9.20764C0.96728 8.65867 1.08106 8.10985 1.33407 7.62119C1.58707 7.13253 1.96957 6.72284 2.43973 6.43692C2.90989 6.15099 3.44961 5.99985 3.99989 6V6ZM3.99989 8C3.73467 8 3.48032 8.10536 3.29278 8.29289C3.10525 8.48043 2.99989 8.73478 2.99989 9C2.99989 9.26522 3.10525 9.51957 3.29278 9.70711C3.48032 9.89464 3.73467 10 3.99989 10C4.26511 10 4.51946 9.89464 4.707 9.70711C4.89453 9.51957 4.99989 9.26522 4.99989 9C4.99989 8.73478 4.89453 8.48043 4.707 8.29289C4.51946 8.10536 4.26511 8 3.99989 8ZM9.99989 1.24966e-07C10.5499 0.00010515 11.0892 0.151391 11.559 0.437322C12.0288 0.723253 12.411 1.13283 12.6637 1.62128C12.9165 2.10973 13.0301 2.65826 12.9922 3.20693C12.9542 3.75559 12.7662 4.28326 12.4486 4.73228C12.1311 5.1813 11.6962 5.53439 11.1915 5.75294C10.6868 5.9715 10.1318 6.04712 9.58702 5.97153C9.04226 5.89595 8.52877 5.67207 8.10266 5.32437C7.67655 4.97667 7.35421 4.51852 7.17089 4H0.999889V2H7.16989C7.3769 1.41493 7.76021 0.908421 8.26704 0.55024C8.77386 0.192059 9.37927 -0.000178928 9.99989 1.24966e-07V1.24966e-07ZM9.99989 2C9.73467 2 9.48032 2.10536 9.29278 2.29289C9.10525 2.48043 8.99989 2.73478 8.99989 3C8.99989 3.26522 9.10525 3.51957 9.29278 3.70711C9.48032 3.89464 9.73467 4 9.99989 4C10.2651 4 10.5195 3.89464 10.707 3.70711C10.8945 3.51957 10.9999 3.26522 10.9999 3C10.9999 2.73478 10.8945 2.48043 10.707 2.29289C10.5195 2.10536 10.2651 2 9.99989 2V2Z"
                fill="#222222"
              />
            </svg>
          </MobileFilterButton>
        </Flex>
      </Div>
    </ContainerMobile>
  );
};

export default Search;

export { SearchMobile };

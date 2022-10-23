import Head from "next/head";
import styled from "styled-components";
import useWindowSize from "../hooks/useScreenDimensions";
import cardData from "../helpers/cardData";
import ImageSlider from "../components/slider/imageSlider";
import MapButton from "../components/mapButton";
import { useEffect, useState } from "react";
// import Image from "next/image";

//breakpoints
//1440px
//1128px
//950px
//744px
const FlexBox = styled.div`
  display: grid;
  grid-row-gap: 40px;
  grid-column-gap: 24px;
  padding: ${({ width }) =>
    width <= 744 ? "14px 24px 0px" : width <= 1440 ? "0px 40px" : "0px 80px"};
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  cursor: pointer;
  margin-top: 14px;
`;

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-radius: 15px;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
`;

const CardText = styled.div``;

const Span = styled.span``;

const P = styled.p`
  display: ${({ display }) => (display ? display : "block")};
  font-size: ${({ size }) => size ?? size}px;
  font-weight: ${({ weight }) => weight ?? weight};
  color: ${({ color }) => color ?? color};
  line-height: 19px;
  margin-top: ${({ margin }) => (margin ? "8px" : "0")};
`;

const Star = styled.span``;

export default function Home() {
  const { windowSize, scrollXY } = useWindowSize();


  return (
    <>
      <Head>
        <title>Airbnb-clone</title>
        <meta name="description" content="An airbnb clone" />
      </Head>

      <FlexBox width={windowSize.width}>
        {cardData.map((ctx, idx) => (
          <FlexContainer key={ctx.id}>
            <ImageContainer>
              <ImageSlider images={ctx.images} dot />
            </ImageContainer>

            <Card>
              <CardText>
                <P size={15}>{ctx.location}</P>
                <P color={"#717171"} weight={300}>
                  hosted by {ctx.host}
                </P>
                <P color={"#717171"} weight={300}>
                  {ctx.date}
                </P>
                <Span>
                  <P margin display={"inline"}>
                    ${ctx.price}
                  </P>
                  <P display={"inline"} color={"#717171"} weight={300}>
                    {" "}
                    night
                  </P>
                </Span>
              </CardText>

              <Star>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.0941 0.578869L10.9701 9.46387L1.11014 10.7339C0.920095 10.758 0.740993 10.8363 0.59414 10.9593C0.447287 11.0824 0.338865 11.245 0.28177 11.4279C0.224675 11.6107 0.221312 11.8061 0.272079 11.9909C0.322847 12.1756 0.425609 12.3419 0.568141 12.4699L7.86114 19.0349L5.89614 28.8869C5.85832 29.0757 5.87582 29.2714 5.94654 29.4505C6.01726 29.6296 6.13819 29.7845 6.2948 29.8966C6.45142 30.0086 6.63705 30.0731 6.8294 30.0822C7.02176 30.0913 7.21265 30.0446 7.37914 29.9479L16.0001 24.9509L24.6251 29.9479C24.7915 30.0442 24.9822 30.0906 25.1742 30.0813C25.3663 30.0721 25.5516 30.0077 25.708 29.8959C25.8644 29.784 25.9852 29.6294 26.056 29.4506C26.1268 29.2719 26.1446 29.0765 26.1071 28.8879L24.1421 19.0349L31.4351 12.4699C31.5773 12.3419 31.6798 12.1758 31.7305 11.9913C31.7811 11.8068 31.7777 11.6116 31.7208 11.429C31.6638 11.2463 31.5557 11.0838 31.4091 10.9608C31.2626 10.8378 31.0839 10.7594 30.8941 10.7349L21.0341 9.46387L16.9071 0.578869C16.8269 0.405964 16.6988 0.259609 16.5381 0.15705C16.3774 0.0544902 16.1908 0 16.0001 0C15.8095 0 15.6228 0.0544902 15.4621 0.15705C15.3015 0.259609 15.1734 0.405964 15.0931 0.578869H15.0941Z"
                    fill="black"
                  />
                </svg>{" "}
                {ctx.rating}
              </Star>
            </Card>
          </FlexContainer>
        ))}
      </FlexBox>

      <MapButton />
    </>
  );
}

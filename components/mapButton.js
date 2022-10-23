import Link from "next/link";
import styled from "styled-components";

const Button = styled.div`
  position: fixed;
  width: 130px;
  height: 50px;
  display: none;
  background: black;
  border-radius: 50px;
  z-index: 15;
  top: 80%;
  opacity: 0.9;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  align-items: center;
  @media (min-width: 744px) {
    display: flex;
  }
`;

const P = styled.div`
  font-size: 14px;
  color: white;
  padding-right: 10px;
`;

const MapButton = () => {
  return (
    <Link href={"/map"}>
      <Button>
        <P>Show map</P>
        <svg
          width="15"
          height="15"
          viewBox="0 0 32 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.2442 2.74692C31.1794 2.45208 31.0567 2.17301 30.8834 1.92585C30.71 1.67868 30.4894 1.46832 30.2342 1.30692C29.9799 1.14365 29.6956 1.03245 29.398 0.979754C29.1004 0.927058 28.7952 0.933913 28.5002 0.999922L20.9852 2.66992L10.9852 0.669922L2.49925 2.55692C1.98742 2.66827 1.52936 2.95202 1.2017 3.36068C0.874046 3.76934 0.696668 4.27813 0.699246 4.80192V26.7519C0.697638 27.1392 0.794539 27.5205 0.98084 27.8601C1.16714 28.1996 1.43672 28.4862 1.76425 28.6929C2.01859 28.8559 2.30265 28.9669 2.60008 29.0196C2.8975 29.0722 3.20241 29.0656 3.49725 28.9999L11.0122 27.3299L21.0122 29.3299L29.4962 27.4439C30.0085 27.3331 30.4672 27.0496 30.7952 26.6409C31.1233 26.2321 31.3009 25.723 31.2982 25.1989V3.24692C31.2982 3.07875 31.2798 2.91108 31.2432 2.74692H31.2442ZM12.4992 24.9749L10.9852 24.6719L9.50725 24.9999H9.49925V3.66492L11.0132 3.32892L12.4992 3.62592V24.9749ZM22.4992 26.3349L20.9842 26.6719L19.4992 26.3749V5.02492L21.0132 5.32892L22.4922 4.99992H22.4992V26.3349Z"
            fill="white"
          />
        </svg>
      </Button>
    </Link>
  );
};

export default MapButton;

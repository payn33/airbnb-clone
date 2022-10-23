import styled from "styled-components";
import dynamic from "next/dynamic";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
const _Map = dynamic(() => import("./map"), { ssr: false });

const Map = () => {
  return (
    <Container>
      <_Map />
    </Container>
  );
};

export default Map;

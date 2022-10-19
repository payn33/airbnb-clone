import dynamic from "next/dynamic";
import Head from "next/head";
// import Image from "next/image";
// import Nav from "../components/nav";

//breakpoints
//1440px
//1128px
//950px
//744px
export default function Home() {
  const Nav = dynamic(
    () => {
      return import("../components/nav"); //fix access window property before mount bug
    },
    { ssr: false }
  );
  return (
    <>
      <Head>
        <title>Airbnb-clone</title>
        <meta name="description" content="An airbnb clone" />
      </Head>
      <Nav />
    </>
  );
}

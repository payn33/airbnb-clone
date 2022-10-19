import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";
//use custom layout here

const GlobalStyle = createGlobalStyle`
html,
body {
  background: #fff;
  padding: 0;
  margin: 0;
  font-family: Figtree, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: #222;
  position: relative;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

button {
  outline: 0;
  font-family: Figtree;
  border: none;
}
:focus {
  outline: 0;
}

input {
  outline: 0;
}
:focus {
  outline: 0;
}
p {
  font-size: 14.4px;
  font-weight: 600;
  padding: 0px;
  margin: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

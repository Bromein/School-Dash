import { createGlobalStyle } from "styled-components";
import SourceSansPro from "../assets/fonts/SourceSansPro-Regular.ttf";
import OpenSansCondensed from "../assets/fonts/OpenSansCondensed-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: SourceSansPro;
    src: url(${SourceSansPro}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: OpenSansCondensed;
    src: url(${OpenSansCondensed}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  * {
    ::-webkit-scrollbar {
    width: 0.2rem;
    border-radius: 100px;
    background-color: ${props => props.theme.darkestGray};

    &-thumb {
      background-color: ${props => props.theme.accentRed};
    }
  }
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-family: SourceSansPro;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.linkColor};
  }
`;

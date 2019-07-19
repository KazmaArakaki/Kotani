import React from "react";

import {
  createGlobalStyle,
} from "styled-components";

import SEO from "../components/seo";

import colors from "../utils/colors";

import MainPage from "./main";

const IndexPage = () => {
  return (
    <>
      <SEO />

      <GlobalStyle />

      <MainPage />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: calc(100vh - 28px);
    background-color: ${colors.beige};
  }
`;

export default IndexPage;


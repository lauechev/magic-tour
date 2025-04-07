import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: #fbfbfb;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-rendering: optimizedLegibility;
    background-image: linear-gradient(-45deg,#cff9ca, #cd3c47);
  }
`;

export const Marginals = css`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  z-index: 1;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 400px;
  width: 600px;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

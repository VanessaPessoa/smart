import styled, {keyframes} from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 60px 0;

`;

const moving = keyframes`
    to {
        background-position: 100vmin 20vmin, -100vmin -25vmin;
    }
`;

const Number = styled.div`
    background: #fff;
    position: relative;
    font: 900 30vmin cursive;
    letter-spacing: 5vmin;
    text-shadow: 2px -1px 0 #000, 4px -2px 0 #0a0a0a, 6px -3px 0 #0f0f0f, 8px -4px 0 #141414, 10px -5px 0 #1a1a1a, 12px -6px 0 #1f1f1f, 14px -7px 0 #242424, 16px -8px 0 #292929;

    ::before {
        background-color: #C0F59F;
        background-image: radial-gradient(closest-side at 50% 50%, #737373 100%, rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #737373 100%, rgba(0, 0, 0, 0));
        background-repeat: repeat-x;
        background-size: 40vmin 40vmin;
        background-position: -100vmin 20vmin, 100vmin -25vmin;
        width: 100%;
        height: 100%;
        mix-blend-mode: screen;
        -webkit-animation: ${moving} 10s linear infinite both;
                animation: ${moving} 10s linear infinite both;
        display: block;
        position: absolute;
        content: "";
      }
`;

const Text = styled.div`
    color: #C0F59F;
    font: 400 5vmin cursive;
`;

export {
    Box,
    Number,
    Text
}
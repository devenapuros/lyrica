import styled from "styled-components";
import { keyframes } from "styled-components";

const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    border: 4px solid ${({ trackColor }) => trackColor || "#0000001a"};
    width: ${({ size }) => size || "2rem"};
    height: ${({ size }) => size || "2rem"};
    border-radius: 50%;
    border-left-color: ${({ lineColor }) => lineColor || "#09f"};
    margin: 0.5rem;

    animation: ${Spin} 1s ease infinite;
`;

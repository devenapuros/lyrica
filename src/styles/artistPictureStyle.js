import styled from "styled-components";

export const PictureContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ size }) => size || "2rem"};
    height: ${({ size }) => size || "2rem"};
    min-width: ${({ size }) => size || "2rem"};
    min-height: ${({ size }) => size || "2rem"};
    margin-right: 1rem;
`;

export const Picture = styled.img`
    width: 100%;
    height: 100%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 50%;
`;

export const Number = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0.1rem;
    left: 0.2rem;
    width: 1.4rem;
    height: 1.4rem;
    background-color: #f39c12;
    border-radius: 50%;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
`;

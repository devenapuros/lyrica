import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: ${({ marginLeft }) => marginLeft || "0"};
    color: ${({ color }) => color || "#000"};
`;

export const LogoText = styled.h3`
    font-weight: bold;
    font-size: ${({ fontSize }) => fontSize || "1rem"};
`;

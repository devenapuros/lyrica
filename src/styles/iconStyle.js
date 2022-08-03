import styled, { css } from "styled-components";

export const Icon = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    ${({ color }) => color && css`color: ${color};`};
    ${({ fontWeight }) => fontWeight && css`font-weight: ${fontWeight};`};
    ${({ margin }) => margin && css`margin: ${margin};`};
    ${({ iconSize }) => iconSize && css`font-size: ${iconSize};`};
`;

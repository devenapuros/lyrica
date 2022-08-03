import styled from "styled-components";
export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #eee;
    padding: 1rem 2rem;
    margin: 0 2rem;
`;

export const SocialAnchor = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    color: #232323;
    transition: color 300ms ease;
    transition: font-size 300ms ease;
    margin: 0 1rem;
    height: 2rem;
    width: 2rem;

    &:hover {
        color: #000;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

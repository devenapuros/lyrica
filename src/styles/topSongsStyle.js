import styled from "styled-components";

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`;

export const SongsGrid = styled.div`
    display: grid;
    margin-top: 2rem;
    column-gap: 3rem;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

import styled from "styled-components";

export const SongContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 0.5rem 0;
    padding: 0.3rem 0.5rem;

    transition: background-color 300ms ease;

    &:hover {
        background-color: #eaeaea;
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {
        width: 80vw;
    }

    @media screen and (min-width: 600px) {
        width: 40vw;
    }

    @media screen and (min-width: 768px) {
        width: 40vw;
    }

    @media screen and (min-width: 992px) {
        width: 23vw;
    }

    @media screen and (min-width: 1200px) {
        width: 25vw;
    }
`;

export const SongTitle = styled.h4`
    color: #222;
    margin-bottom: -0.3rem;
    transition: color 300ms ease;

    ${SongContainer}:hover & {
        color: #f39c12;
    }
`;

export const ArtistName = styled.small`
    font-size: 0.8rem;
    color: #555;
`;

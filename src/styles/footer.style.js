import styled from "styled-components";

export const FooterSections = styled.footer`
    display: grid;
    column-gap: 2rem;
    margin: 2rem;
    padding: 1rem 3rem 0 3rem;
    border-top: 1px solid #eee;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const FooterSec = styled.section`
    padding-top: 2rem;
`;

export const BrandText = styled.p`
    font-size: 0.9rem;
    color: #444;
    margin-top: 1rem;
`;

export const FooterUl = styled.ul`
    margin-top: 1rem;
`;

export const FooterSectionItem = styled.a`
    font-size: 0.9rem;
    color: #444;
    transition: color 300ms ease;

    &:hover {
        color: #111;
        font-weight: 500;
    }
`;

import styled from "styled-components";

export const Hero = styled.div`
    height: 80vh;
    background: url("/img/bg1.jpg");
    background-position: 50% 50%;
    background-size: cover;
`;

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: transparent;
    height: 4rem;
`;

export const Right = styled.ul`
    display: flex;
    list-style: none;
`;

export const RightElement = styled.a`
    list-style: none;
    margin: 0 1rem;
    text-decoration: none;
    color: #e2e2e2;
    font-weight: bold;
    transition: color 300ms ease;

    &:hover {
        color: white;
    }
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100% - 4rem);
`;

export const Form = styled.form`
    @media screen and (max-width: 600px) {
        max-width: 95%;
    }

    @media screen and (min-width: 600px) {
        max-width: 90%;
    }

    @media screen and (min-width: 768px) {
        max-width: 78%;
    }

    @media screen and (min-width: 992px) {
        max-width: 68%;
    }

    @media screen and (min-width: 1200px) {
        max-width: 55%;
    }
`;

export const FormTitle = styled.h1`
    color: white;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bold;
    text-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`;

export const FormGroup = styled.div`
    display: flex;
    background-color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`;

export const FormInput = styled.input`
    outline: none;
    border: 0;
    background-color: transparent;
    padding: 0.5rem;
    min-width: 0;
    font-size: 1rem;
`;

export const FormDivider = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    border-left: 1px solid #ddd;
`;

export const Actions = styled.button`
    background-color: transparent;
    border: 0;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2.56rem;
    color: #444;
    transition: color 300ms ease;
    margin-left: 0.5rem;

    &:hover {
        color: black;
        cursor: pointer;
    }
`;

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Error = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    margin-top: 0.7rem;
    padding: 0.3rem 1rem;
    background-color: white;
    border-radius: 0.3rem;
    font-size: 0.85rem;
    color: #555;
`;

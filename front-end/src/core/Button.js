import styled from 'styled-components';
import '../App.css';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.3rem;
    background: transparent;
    border: 0.05rem solid #ffffff;
    color: #ffffff;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem
    cursor: pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: #ffffff;
        color: var(--mainBlue);
    }
    &:focus {
        outline: none;
    }
`;

export const DeetsButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.3rem;
    background: transparent;
    border: 0.05rem solid var(--mainBlue);
    color: var(--mainBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem
    cursor: pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: var(--mainBlue);
        color: #ffffff;
    }
    &:focus {
        outline: none;
    }
`;

export const CartButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.3rem;
    background: transparent;
    border: 0.05rem solid var(--mainYellow);
    color: var(--mainYellow);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem
    cursor: pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: var(--mainYellow);
        color: #ffffff;
    }
    &:focus {
        outline: none;
    }
`;
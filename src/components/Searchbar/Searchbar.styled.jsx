import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    background-color: #2d3035;
    width: 100%;
    z-index: 999;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0);
    color: white;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const SearchIcon = styled(AiOutlineSearch)`
    fill: currentColor;
`;

export const Input = styled.input`
    width: 230px;
    height: 40px;
    margin-right: 20px;
    padding: 0 15px;
    border: none;
    border-bottom: 1px solid #fff;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    color: #fff;
    font-weight: 400;
    font-size: 18px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: 360px) {
        width: 270px;
    }
    @media screen and (min-width: 480px) {
        width: 390px;
    }
    &:focus {
        background-color: rgba(255, 255, 255, 0.1);
    }
    &::placeholder {
        color: #fff;
        font-weight: 400;
        font-size: 18px;
    }
`;

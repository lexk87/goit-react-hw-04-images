import styled from 'styled-components';

export const LoadBtn = styled.button`
    display: block;
    width: 150px;
    height: 40px;
    margin: 0 auto;
    background-color: #2d3035;
    color: #fff;
    font-size: 18px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        transform: scale(1.05);
    }
`;

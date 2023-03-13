import styled from 'styled-components';

export const Item = styled.li`
    cursor: zoom-in;
    margin-bottom: 30px;
    overflow: hidden;
    border: 15px solid #2d3035;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: 768px) {
        flex-basis: calc((100% - 30px) / 2);
        margin: 0;
    }
    @media screen and (min-width: 1200px) {
        flex-basis: calc((100% - 60px) / 3);
    }
    @media screen and (min-width: 1600px) {
        flex-basis: calc((100% - 90px) / 4);
    }
    &:hover,
    &:focus {
        transform: scale(1.05);
    }
`;

export const Img = styled.img`
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    height: 180px;
    object-fit: cover;
    @media screen and (min-width: 360px) {
        height: 190px;
    }
    @media screen and (min-width: 480px) {
        height: 250px;
    }
    @media screen and (min-width: 768px) {
        height: 220px;
    }
`;

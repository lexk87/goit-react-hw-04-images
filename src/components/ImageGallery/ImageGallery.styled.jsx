import styled from 'styled-components';

export const GalleryList = styled.ul`
    margin: 0 auto 30px;
    padding: 0 15px;
    @media screen and (min-width: 360px) {
        width: 360px;
    }
    @media screen and (min-width: 480px) {
        width: 480px;
    }
    @media screen and (min-width: 768px) {
        width: 768px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }
    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
    @media screen and (min-width: 1600px) {
        width: 1600px;
    }
`;

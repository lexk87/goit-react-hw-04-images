import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div``;

export const ModalImg = styled.img`
    max-width: calc(100vw - 60px);
    max-height: calc(100vh - 60px);
    object-fit: contain;
`;

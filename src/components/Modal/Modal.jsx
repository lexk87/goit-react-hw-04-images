import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalBody, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, image, tags }) => {
    useEffect(() => {
        const onKeyDown = e => {
            if (e.code !== 'Escape') {
                return;
            }
            toggleModal();
        };

        window.addEventListener('keydown', onKeyDown);

        return () => window.removeEventListener('keydown', this.onKeyDown);
    }, [toggleModal]);

    const overlayClick = e => {
        if (e.target === e.currentTarget) {
            toggleModal();
        }
    };

    return createPortal(
        <ModalOverlay onClick={overlayClick}>
            <ModalBody>
                <ModalImg src={image} alt={tags} />
            </ModalBody>
        </ModalOverlay>,
        modalRoot
    );
};

// export class Modal extends Component {
//     componentDidMount() {
//         window.addEventListener('keydown', this.onKeyDown);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.onKeyDown);
//     }

//     onKeyDown = e => {
//         if (e.code !== 'Escape') {
//             return;
//         }
//         this.props.toggleModal();
//     };

//     overlayClick = e => {
//         if (e.target === e.currentTarget) {
//             this.props.toggleModal();
//         }
//     };

//     render() {
//         const { image, tags } = this.props;

//         return createPortal(
//             <ModalOverlay onClick={this.overlayClick}>
//                 <ModalBody>
//                     <ModalImg src={image} alt={tags} />
//                 </ModalBody>
//             </ModalOverlay>,
//             modalRoot
//         );
//     }
// }

Modal.propTypes = {
    toggleModal: PropTypes.func,
    image: PropTypes.string,
    tags: PropTypes.string,
};

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';
import { Modal } from 'components';

export const GalleryItem = ({ largeImageURL, tags, webformatURL }) => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const toggleModal = () => {
        setIsModalOpened(prevIsModalOpened => !prevIsModalOpened);
    };

    return (
        <>
            <Item onClick={toggleModal}>
                <Img src={webformatURL} alt={tags} />
            </Item>
            {isModalOpened && (
                <Modal
                    toggleModal={toggleModal}
                    image={largeImageURL}
                    tags={tags}
                />
            )}
        </>
    );
};

// export class GalleryItem extends Component {
//     state = {
//         isModalOpened: false,
//     };

//     toggleModal = () => {
//         this.setState(({ isModalOpened }) => ({
//             isModalOpened: !isModalOpened,
//         }));
//     };

//     render() {
//         const { isModalOpened } = this.state;
//         const { largeImageURL, tags, webformatURL } = this.props;

//         return (
//             <>
//                 <Item onClick={this.toggleModal}>
//                     <Img src={webformatURL} alt={tags} />
//                 </Item>
//                 {isModalOpened && (
//                     <Modal
//                         toggleModal={this.toggleModal}
//                         image={largeImageURL}
//                         tags={tags}
//                     />
//                 )}
//             </>
//         );
//     }
// }

GalleryItem.propTypes = {
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
};

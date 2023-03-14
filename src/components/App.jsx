import { useState, useEffect } from 'react';
import { Button, Searchbar, ImageGallery, Loader, ListEnd } from 'components';
import { getImages } from 'services/ApiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    const [images, setImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isNotEmpty, setIsNotEmpty] = useState(false);

    useEffect(() => {
        if (!searchQuery) {
            return;
        }

        const fetchImages = async () => {
            setIsLoading(true);
            const result = await getImages(searchQuery, pageNumber);
            setIsLoading(false);

            if (result.hits.length === 0) {
                setIsNotEmpty(false);
                toast.error(
                    'Sorry, there are no images matching your search request.',
                    {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                    }
                );
                return;
            }

            const totalPages = Math.ceil(result.totalHits / 12);

            setImages(prevImages => [...prevImages, ...result.hits]);
            setTotalPages(totalPages);
            setIsNotEmpty(true);
        };

        fetchImages();
    }, [searchQuery, pageNumber]);

    const onSubmit = e => {
        e.preventDefault();
        const inputValue = e.target.elements.searchField.value.trim();

        if (inputValue === '') {
            setIsNotEmpty(false);
            toast.warn('Your search request is empty!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }

        setImages([]);
        setSearchQuery(inputValue);
        setPageNumber(1);
    };

    const loadMore = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
    };

    const isNotListEnd = pageNumber < totalPages;

    return (
        <>
            <Searchbar onSubmit={onSubmit} />
            {isNotEmpty && <ImageGallery images={images} />}
            {isLoading ? (
                <Loader />
            ) : (
                isNotEmpty && isNotListEnd && <Button onClick={loadMore} />
            )}
            {!isNotListEnd && isNotEmpty && <ListEnd />}

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

// export class App extends Component {
//     state = {
//         images: [],
//         searchQuery: '',
//         pageNumber: 1,
//         totalPages: null,
//         isLoading: false,
//         isNotEmpty: false,
//     };

//     async componentDidUpdate(_, prevState) {
//         const { searchQuery, pageNumber } = this.state;

//         if (searchQuery === '') {
//             return;
//         }

//         if (
//             prevState.pageNumber !== pageNumber ||
//             prevState.searchQuery !== searchQuery
//         ) {
//             this.setState({ isLoading: true });
//             const result = await getImages(searchQuery, pageNumber);

//             if (result.hits.length === 0) {
//                 this.setState({ isLoading: false, isNotEmpty: false });
//                 toast.error(
//                     'Sorry, there are no images matching your search request.',
//                     {
//                         position: 'top-right',
//                         autoClose: 3000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: 'colored',
//                     }
//                 );
//                 return;
//             }

//             const totalPages = Math.ceil(result.totalHits / 12);

//             this.setState(({ images }) => ({
//                 images: [...images, ...result.hits],
//                 totalPages: totalPages,
//                 isLoading: false,
//                 isNotEmpty: true,
//             }));
//         }
//     }

//     onSubmit = e => {
//         e.preventDefault();
//         const inputValue = e.target.elements.searchField.value.trim();

//         if (inputValue === '') {
//             this.setState({ isNotEmpty: false });
//             toast.warn('Your search request is empty!', {
//                 position: 'top-right',
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: 'colored',
//             });
//         }

//         this.setState({ images: [], searchQuery: inputValue, pageNumber: 1 });
//     };

//     loadMore = () => {
//         this.setState(({ pageNumber }) => ({
//             pageNumber: pageNumber + 1,
//         }));
//     };

//     render() {
//         const { images, pageNumber, totalPages, isLoading, isNotEmpty } =
//             this.state;
//         const isNotListEnd = pageNumber < totalPages;

//         return (
//             <>
//                 <Searchbar onSubmit={this.onSubmit} />
//                 {isNotEmpty && <ImageGallery images={images} />}
//                 {isLoading ? (
//                     <Loader />
//                 ) : (
//                     isNotEmpty &&
//                     isNotListEnd && <Button onClick={this.loadMore} />
//                 )}
//                 {!isNotListEnd && isNotEmpty && <ListEnd />}

//                 <ToastContainer
//                     position="top-right"
//                     autoClose={3000}
//                     hideProgressBar={false}
//                     newestOnTop={false}
//                     closeOnClick
//                     rtl={false}
//                     pauseOnFocusLoss
//                     draggable
//                     pauseOnHover
//                     theme="colored"
//                 />
//             </>
//         );
//     }
// }

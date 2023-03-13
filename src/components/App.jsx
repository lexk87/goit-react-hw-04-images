import React, { Component } from 'react';
import { Button, Searchbar, ImageGallery, Loader, ListEnd } from 'components';
import { getImages } from 'services/ApiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
    state = {
        images: [],
        searchQuery: '',
        pageNumber: 1,
        totalPages: null,
        isLoading: false,
        isNotEmpty: false,
    };

    async componentDidUpdate(_, prevState) {
        const { searchQuery, pageNumber } = this.state;

        if (searchQuery === '') {
            return;
        }

        if (
            prevState.pageNumber !== pageNumber ||
            prevState.searchQuery !== searchQuery
        ) {
            this.setState({ isLoading: true });
            const result = await getImages(searchQuery, pageNumber);

            if (result.hits.length === 0) {
                this.setState({ isLoading: false, isNotEmpty: false });
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

            this.setState(({ images }) => ({
                images: [...images, ...result.hits],
                totalPages: totalPages,
                isLoading: false,
                isNotEmpty: true,
            }));
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const inputValue = e.target.elements.searchField.value.trim();

        if (inputValue === '') {
            this.setState({ isNotEmpty: false });
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

        this.setState({ images: [], searchQuery: inputValue, pageNumber: 1 });
    };

    loadMore = () => {
        this.setState(({ pageNumber }) => ({
            pageNumber: pageNumber + 1,
        }));
    };

    render() {
        const { images, pageNumber, totalPages, isLoading, isNotEmpty } =
            this.state;
        const isNotListEnd = pageNumber < totalPages;

        return (
            <>
                <Searchbar onSubmit={this.onSubmit} />
                {isNotEmpty && <ImageGallery images={images} />}
                {isLoading ? (
                    <Loader />
                ) : (
                    isNotEmpty &&
                    isNotListEnd && <Button onClick={this.loadMore} />
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
    }
}

// export class App extends Component {
//     state = {
//         images: [],
//         searchQuery: null,
//         pageNumber: 1,
//         totalPages: null,
//         isLoading: false,
//         isNotEmpty: false,
//     };

//     async componentDidUpdate(_, prevState) {
//         const { searchQuery, pageNumber } = this.state;

//         if (prevState.pageNumber !== pageNumber && pageNumber !== 1) {
//             this.setState({ isLoading: true });
//             const result = await getImages(searchQuery, pageNumber);
//             this.setState(({ images }) => ({
//                 images: [...images, ...result.hits],
//                 isLoading: false,
//             }));
//         }
//     }

//     onSubmit = async e => {
//         e.preventDefault();
//         const inputValue = e.target.elements.searchField.value.trim();
//         const pageNumber = 1;

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
//             return;
//         }

//         this.setState({ isLoading: true });
//         const result = await getImages(inputValue, pageNumber);
//         this.setState({ isLoading: false });

//         if (result.hits.length === 0) {
//             this.setState({ isNotEmpty: false });
//             toast.error(
//                 'Sorry, there are no images matching your search request.',
//                 {
//                     position: 'top-right',
//                     autoClose: 3000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: 'colored',
//                 }
//             );
//             return;
//         }

//         const totalPages = Math.floor(result.totalHits / 12);

//         this.setState({
//             images: result.hits,
//             searchQuery: inputValue,
//             pageNumber: pageNumber,
//             totalPages: totalPages,
//             isNotEmpty: true,
//         });
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

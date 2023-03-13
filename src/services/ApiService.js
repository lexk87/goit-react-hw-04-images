import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '32574266-63fdd8a3e7d9a73b0fcedbb7f';

export async function getImages(searchQuery, pageNumber) {
    const SEARCH_PARAMS = {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        page: pageNumber,
        per_page: 12,
    };

    try {
        const response = await axios.get(API_URL, {
            params: SEARCH_PARAMS,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

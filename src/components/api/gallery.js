import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '41243190-013300446e5136f16c0416e3e',
  },
});

export const getPhotos = async (query, page) => {
  const params = {
    q: query,
    page,
    per_page: 12,
    colors: 'grayscale',
    orientation: 'vertical',
    safesearch: true,
    image_type: 'photo',
  };

  try {
    const { data } = await instance.get('/v1/', { params });
    return data;
  } catch (error) {
    console.error('Error fetching Pixabay API:', error);
    throw error;
  }
};
// async componentDidUpdate(_, prevState) {
//   const { query, page } = this.state;
//   if (prevState.query !== query || prevState.page !== page) {
//     await this.fetchPhotos(query, page);
//     console.log('Updated photos:', this.state.photos);
//   }
// }

// fetchPhotos = async (query, page) => {
//   try {
//     const { hits } = await getPhotos(query, page);
//     this.setState(prev => ({ photos: [...prev.photos, ...hits] }));
//     console.log('Fetched photos:', hits);
//     toast.info('Hello!');
//   } catch (error) {
//     console.error('Error fetching photos:', error);
//     toast.error('Failed to fetch photos. Please try again.');
//   }
// };

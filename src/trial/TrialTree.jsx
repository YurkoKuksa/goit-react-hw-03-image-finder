// export class App extends Component {
//   state = {
//     query: '',
//     photos: [],
//     page: 1,
//     isOpen: false,
//   };
//   async componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       await this.fetchPhotos(query, page);
//     }
//   }

//   fetchPhotos = async (query, page) => {
//     try {
//       const { hits } = await getPhotos(query, page);
//       this.setState(prev => ({ photos: [...prev.photos, ...hits] }));
//       console.log(hits);
//       toast.info('Hello!');
//     } catch (error) {
//       console.error('Error fetching photos:', error);
//       toast.error('Failed to fetch photos. Please try again.');
//     }
//   };

// componentDidUpdate(_, prevState) {
//   const { query, page } = this.state;
//   if (prevState.query !== query || prevState.page !== page) {
//     this.fetchPhotos(query, page);
//   }
// }

// fetchPhotos = async (query, page) => {
//   try {
//     const { results } = await getPhotos(query, page).then(
//       ({ hits, total }) => {
//         this.setState(prev => ({ photos: [...prev.photos, ...hits] }));
//         console.log(hits);
//         toast.info('Hello!');
//       }
//     );
//   } catch (error) {
//     console.error('Error fetching photos:', error);
//     toast.error('Failed to fetch photos. Please try again.');
//   }
// };

//

// try {
//   this.setState({ isLoader: true });
//   const data = await getPhotos(query, page);

//   this.setState(prev => ({
//     photos: [...prev.photos, ...data.results],
//   }));
//   if (prevState.totalPages !== data.total_pages) {
//     this.setState({ totalPages: data.total_pages });
//   }
// } catch (e) {
//   console.log(e);
//   toast.error('Sorry, problem connection to server!');
// } finally {
//   this.setState({ isLoader: false });
// }
//   }
// }

//   handleSubmit = query => {
//     this.setState({ query, page: 1, photos: [] });
//   };

//   handleOpenModal = () => {
//     this.setState({ isOpen: true, isLoader: true });
//   };

//   handleCloseModal = () => {
//     this.setState({ isOpen: false, isLoader: false });
//   };

//   render() {
//     const { photos, isLoader, isOpen } = this.state;
//     return (
//       <MainContainer>
//         <Searchbar onSubmit={this.handleSubmit} />
//         {photos && (
//           <ImageGallery photos={photos} openModal={this.handleOpenModal} />
//         )}

//         <Button />

//         {isLoader && <Loader />}
//         {isOpen && <Modal close={this.handleCloseModal}></Modal>}
//         {isLoader && <Loader />}
//       </MainContainer>
//     );
//   }
// }

//
//
//
//
//
//
//

//
//
//
//
//

//  handleSearch = async (query) => {
//     try {
//       this.setState({ isLoader: true });
//       const photos = await getPhotos(query, this.state.page);
//       this.setState({ photos, page: 1, isLoader: false });
//     } catch (error) {
//       console.error('Error fetching photos:', error);
//       toast.error('Failed to fetch photos. Please try again.');
//       this.setState({ isLoader: false });
//     }
//   };

//   render() {
//     const { photos, isLoader, isOpen } = this.state;
//     return (
//       <MainContainer>
//         <Searchbar onSearch={this.handleSearch} />
//         {photos && (
//           <ImageGallery photos={photos} openModal={this.handleOpenModal} />
//         )}
//         <Button />

//         {isLoader && <Loader />}
//         {isOpen && <Modal close={this.handleCloseModal}></Modal>}
//         {isLoader && <Loader />}
//       </MainContainer>
//     );
//   }
// }

// export default class App extends Component {
//   state = {
//     query: '',
//     page: 1,
//     photos: [],
//     totalPages: 1,
//     isLoader: false,
//     isOpen: false,
//     modalContent: {},
//   };

//   async componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       try {
//         this.setState({ isLoader: true });
//         const data = await getPhotos(query, page);

//         this.setState(prev => ({
//           photos: [...prev.photos, ...data.results],
//         }));
//         if (prevState.totalPages !== data.total_pages) {
//           this.setState({ totalPages: data.total_pages });
//         }
//       } catch (e) {
//         console.log(e);
//         toast.error('Sorry, problem connection to server!');
//       } finally {
//         this.setState({ isLoader: false });
//       }
//     }
//   }

//   handleFormSubmit = query => {
//     this.setState({ query, page: 1, photos: [] });
//   };

//   handleClickButton = e => {
//     this.setState(prev => ({
//       page: prev.page + 1,
//     }));
//   };

//   handleToggleModal = () => {
//     this.setState(prev => ({ isOpen: !prev.isOpen }));
//   };

//   handleOpenModal = img => {
//     this.setState({ modalContent: img, isOpen: true, isLoader: true });
//   };

//   handleToggleLoader = () => {
//     this.setState(prev => ({ isLoader: !prev.isLoader }));
//   };

//   render() {
//     const { photos, page, totalPages, isLoader, isOpen, modalContent } =
//       this.state;
//     return (
//       <MainContainer>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         {photos && (
//           <ImageGallery photos={photos} openModal={this.handleOpenModal} />
//         )}
//         {totalPages > 1 && page < totalPages && !isLoader ? (
//           <Button onClick={this.handleClickButton} />
//         ) : (
//           ''
//         )}
//         {isLoader && <Loader />}
//         {isOpen && (
//           <Modal close={this.handleCloseModal}>
//             {isLoader && <Loader color="white" />}
//             <img
//               src={modalContent.src}
//               alt={modalContent.alt}
//               onLoad={this.handleToggleLoader}
//             />
//           </Modal>
//         )}
//       </MainContainer>
//     );
//   }
// }

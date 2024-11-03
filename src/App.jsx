import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import fetchImages from "./fetchImages";

import "./App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      if (searchValue) {
        try {
          setIsLoading(true);
          setError(null);
          const { images: fetchedImages, totalPages } = await fetchImages(searchValue, page);

          if (fetchedImages.length === 0 && page === 1) {
            toast.error("Sorry, there are no images matching your search query.");
          }

          setImages((prevImages) => (page === 1 ? fetchedImages : [...prevImages, ...fetchedImages]));
          setTotalPages(totalPages);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    getImages();
  }, [searchValue, page]);

  const resetSearch = () => {
    setPage(1);
    setSearchValue("");
    setImages([]);
    setTotalPages(0);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  function openModal(image) {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  function closeModal() {
    setSelectedImage(null);
    setModalIsOpen(false);
  }

  return (
    <div>
      <Toaster />
      <SearchBar resetSearch={resetSearch} setSearchValue={setSearchValue} />
      {isLoading && <Loader />}
      {error ? <ErrorMessage /> : <ImageGallery images={images} openModal={openModal} />}
      {images.length > 0 && !isLoading && page < totalPages && <LoadMoreBtn loadMore={loadMore} />}
      <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} image={selectedImage} />
    </div>
  );
}

export default App;

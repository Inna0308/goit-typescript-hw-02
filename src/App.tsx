import { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import fetchImages from "./fetchImages";

import { Image } from "./components/types";

import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const getImages = async () => {
      if (searchValue) {
        try {
          setIsLoading(true);
          setError(false);
          const { images: fetchedImages, totalPages } = await fetchImages(searchValue, page);

          if (fetchedImages.length === 0 && page === 1) {
            toast.error("Sorry, there are no images matching your search query.");
          }

          setImages((prevImages) => (page === 1 ? fetchedImages : [...prevImages, ...fetchedImages]));
          setTotalPages(totalPages);
        } catch (error) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      }
    };

    getImages();
  }, [searchValue, page]);

  const resetSearch = (): void => {
    setPage(1);
    setSearchValue("");
    setImages([]);
    setTotalPages(0);
  };

  const loadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  function openModal(image: string): void {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  function closeModal(): void {
    setSelectedImage("");
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

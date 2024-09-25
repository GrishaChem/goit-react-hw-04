import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import fetchImages from "./components/Service/Service";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMore/LoadMoreBtn";
import ErrorMes from "./components/ErrorMes/ErrorMes";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
        setArticles((prev) => [...prev, ...data.results]);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (topic) => {
    setQuery(topic);
    setPage(1);
    setArticles([]);
  };

  const openModal = (image, description) => {
    setSelectedImage({ image, description }); // Передаємо і зображення, і опис
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      {!!articles.length && (
        <ImageGallery results={articles} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMes />}
      {!!articles.length && <LoadMoreBtn handleChangePage={handleChangePage} />}

      {/* Модальне вікно */}
      {modalIsOpen && selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          largeImage={selectedImage.image} // Передаємо велике зображення
          description={selectedImage.description} // Передаємо опис
        />
      )}
    </>
  );
};

export default App;

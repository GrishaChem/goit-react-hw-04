import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchImages from "./components/Service/Service";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { ThreeDots } from "react-loader-spinner";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMore/LoadMoreBtn";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
        setArticles((prev) => [...prev, ...data.results]);
        console.log(data.results);
        setIsLoading(false);
      } catch {
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
  return (
    <>
      <SearchBar setQuery={setQuery} />
      {!!articles.length && <ImageGallery results={articles} />}
      {isLoading && <Loader />}
      {isError && <h2>ERORR</h2>}
      <LoadMoreBtn handleChangePage={handleChangePage} />
    </>
  );
};

export default App;

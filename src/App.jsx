import { useState } from "react";
import Header from "./components/header/header";
import HeroHeader from "./components/heroHeader/HeroHeader";
import Services from "./components/services/Services";
import TourList from "./components/tourlist/TourList";
import { toursList } from "./data";
import Pagination from "./components/pagination/pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const TOURS_BY_PAGE = 6;
  const pagesNumber = Math.ceil(toursList.length / TOURS_BY_PAGE);
  const startingIndex = TOURS_BY_PAGE * (currentPage - 1);
  const endingIndex = TOURS_BY_PAGE * currentPage;
  const currentTours = toursList.slice(startingIndex, endingIndex);
  return (
    <>
      <Header />
      <HeroHeader />
      <Services />
      <TourList toursList={currentTours} />
      <Pagination
        pagesNumber={pagesNumber}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;

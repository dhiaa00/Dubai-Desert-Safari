import { useState } from "react";
import Header from "./components/header/header";
import HeroHeader from "./components/heroHeader/HeroHeader";
import Services from "./components/services/Services";
import TourList from "./components/tourlist/TourList";
import { toursList } from "./data";
import Pagination from "./components/pagination/pagination";
import Sort from "./components/sort/sort";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState("recommanded");
  const TOURS_BY_PAGE = 6;
  const pagesNumber = Math.ceil(toursList.length / TOURS_BY_PAGE);
  const startingIndex = TOURS_BY_PAGE * (currentPage - 1);
  const endingIndex = TOURS_BY_PAGE * currentPage;

  // sort

  const sortedList =
    sortMethod === "recommanded"
      ? toursList.sort((ob1, ob2) => {
          return ob2.rating - ob1.rating;
        })
      : sortMethod === "low"
      ? toursList.sort((ob1, ob2) => {
          return ob1.priceFrom - ob2.priceFrom;
        })
      : toursList.sort((ob1, ob2) => {
          return ob2.priceFrom - ob1.priceFrom;
        });

  const currentTours = sortedList.slice(startingIndex, endingIndex);
  return (
    <>
      <Header />
      <HeroHeader />
      <Services />
      <Sort toursNumber={toursList.length} setSortMethod={setSortMethod} />
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

import { useState } from "react";
import Header from "./components/header/header";
import HeroHeader from "./components/heroHeader/HeroHeader";
import Services from "./components/services/Services";
import TourList from "./components/tourlist/TourList";
import { toursList } from "./data";
import Pagination from "./components/pagination/pagination";
import Sort from "./components/sort/sort";
import { paginate } from "./utils/pagination";
import Banner from "./components/banner/Banner";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState("recommanded");
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
  const { pagesNumber, currentTours } = paginate(
    toursList.length,
    currentPage,
    sortedList
  );
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
      <Banner />
    </>
  );
}

export default App;

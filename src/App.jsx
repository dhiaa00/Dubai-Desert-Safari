import Header from "./components/header/header";
import HeroHeader from "./components/heroHeader/HeroHeader";
import Services from "./components/services/Services";
import { TourList } from "./components/tourlist/TourList";

function App() {
  return (
    <>
      <Header />
      <HeroHeader />
      <Services />
      <TourList />
    </>
  );
}

export default App;

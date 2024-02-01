import "./banner.css";
import skyScrapper from "../../images/skyscrepper.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <h2>Dubai is waiting for you</h2>
      <img src={skyScrapper} alt="Sky Scrapper" />
    </div>
  );
};

export default Banner;

import SearchBox from "./SearchBox";
import "./heroheader.css";

const HeroHeader = () => {
  return (
    <div className="heroheader">
      <SearchBox />
      <div className="heroheader-text">
        <h1>
          <span>Dubai</span>
          Desert Safaris
        </h1>
      </div>
    </div>
  );
};

export default HeroHeader;

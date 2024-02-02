import "./singletour.css";
import Rating from "../../components/tourlist/Rating";
import { toursList } from "../../data";

const SingleTour = () => {
  const currentId = parseInt(window.location.pathname.split("/")[2]);
  var index = toursList.findIndex(function (e) {
    return e.id == currentId;
  });
  const currentTour = toursList[index];
  return (
    <div className="single-tour">
      <div className="tour-step">
        United Arab Emirates <i className="bi bi-chevron-right"></i> Things to
        do <i className="bi bi-chevron-right"></i> Safari
      </div>
      <div className="tour-img-label">ADVENTURE</div>
      <h1>Dubai: {currentTour.title}</h1>
      <div className="details">
        <Rating
          rating={currentTour.rating}
          reviews={currentTour.reviews}
          id={currentTour.id}
        />
        <div className="provider">
          <span>Activity Provider: </span>Dhia eddine
        </div>
      </div>
      <img src={currentTour.image} alt="tour image" />
    </div>
  );
};

export default SingleTour;

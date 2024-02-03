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
      <div className="tour-info">
        <img src={currentTour.image} alt="tour image" />
        <div className="info">
          <div className="save-up">save up to 35%</div>
          <p>booked 42 times yesterday</p>
          <div className="book-now">
            <div className="price">
              {currentTour.priceFrom}$ <span>per person</span>
            </div>
            <button>Book Now</button>
          </div>

          <div className="more-details">
            <i class="bi bi-calendar-check"></i> Reserve now and pay laterto
            your spot and pay nothing today
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;

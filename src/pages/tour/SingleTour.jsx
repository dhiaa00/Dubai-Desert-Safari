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
      <div className="about-activity">
        <p className="activity-description">
          Discover a different side of Dubai as a fun-filled safari across the
          desert. Try sandboarding, dune bashing and camel riding, with the
          option to add an electifying quad bike ride or immersive Al Khayma
          Camp dinner experience to your adventure.
        </p>
        <h2>About this Activity</h2>
        <ul>
          <li>
            <h3>
              <i className="bi bi-calendar3"></i>Free Cancellation
            </h3>
            <p>Cancel up to 24 hours in advance to receive a full refund</p>
          </li>
          <li>
            <h3>
              <i className="bi bi-cash-coin"></i>Reserve now & pay later
            </h3>
            <p>
              Keep your travel plan flexible --book your spot and pay nothing
              today
            </p>
          </li>
          <li>
            <h3>
              <i className="bi bi-virus2"></i>Covid-19 precautions
            </h3>
            <p>
              Special health and safety measures are in place. Check your
              activity voucher once you book for full details.
            </p>
          </li>
          <li>
            <h3>
              <i className="bi bi-clock-history"></i>Duration 4-7 hours
            </h3>
            <p>Check availability to see starting time</p>
          </li>
          <li>
            <h3>
              <i className="bi bi-person-check"></i>Live tour guide
            </h3>
            <p>the trip will be guided in English</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleTour;

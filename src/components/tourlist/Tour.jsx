import Rating from "./Rating";
import { Link } from "react-router-dom";

const Tour = ({ details }) => {
  return (
    <div className="tour">
      <img src={details.image} alt="tour photo" />
      <div className="tour-img-label">ADVENTURE</div>
      <div className="info">
        <h3>{details.title}</h3>
        <div className="duration">{details.duration} - Pickup available</div>
        <Rating
          rating={details.rating}
          reviews={details.reviews}
          id={details.id}
        />
        <div className="price">
          From ${details.priceFrom} <span>per person</span>
        </div>
      </div>
      <Link className="see-more-btn" to={`/tour/${details.id}`}>
        See More
      </Link>
    </div>
  );
};

export default Tour;

import Rating from "./Rating";

const Tour = ({ details }) => {
  return (
    <div className="tour" key={details.id}>
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
      <a className="see-more-btn" href="http://">
        See More
      </a>
    </div>
  );
};

export default Tour;

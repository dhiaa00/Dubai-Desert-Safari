const Rating = ({ rating, reviews, id }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={`${id}` + `${i}`} className="bi bi-star-fill"></i>);
    } else if (i - 0.5 <= rating) {
      stars.push(<i key={`${id}` + `${i}`} className="bi bi-star-half"></i>);
    } else {
      stars.push(<i key={`${id}` + `${i}`} className="bi bi-star"></i>);
    }
  }
  return (
    <div className="rating">
      <div className="stars">{stars}</div>
      {rating} ({reviews} reviews)
    </div>
  );
};

export default Rating;

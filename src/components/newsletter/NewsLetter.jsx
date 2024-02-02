import "./newsletter.css";
import newsletter from "../../images/newsletterimage.jpg";
import { useState } from "react";

const NewsLetter = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("no email entered");
    } else {
      alert("your email is added succesfully");
    }
  };

  return (
    <div className="newsletter">
      <div className="newsletter-wrapper">
        <img src={newsletter} alt="newsletter  image" />
        <div className="side-call">
          <h2>Your Dubai itinerary is waiting.</h2>
          <p>
            Receive a curated 48-hour itinerary featuring the most iconic
            experience in Dubai, straight to your inbox
          </p>
          <form action="POST" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              placeholder="Your Email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

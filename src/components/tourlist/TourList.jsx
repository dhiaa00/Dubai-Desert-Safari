import Tour from "./Tour";
import "./tourlist.css";

const TourList = ({ toursList }) => {
  return (
    <div className="tourlist">
      {toursList.map((e) => {
        return <Tour details={e} key={e.id} />;
      })}
    </div>
  );
};

export default TourList;

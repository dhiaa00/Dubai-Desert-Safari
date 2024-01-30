import Tour from "./Tour";
import "./tourlist.css";
import { toursList } from "../../data";

export const TourList = () => {
  return (
    <div className="tourlist">
      {toursList.map((e) => {
        return <Tour details={e} />;
      })}
    </div>
  );
};

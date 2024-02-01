import "./sort.css";

const Sort = ({ toursNumber, setSortMethod }) => {
  return (
    <div className="sort">
      <div className="tours-number">
        {" "}
        <span>{toursNumber}</span> tours found{" "}
      </div>
      <select
        name="sortMethod"
        id="sortMethod"
        onChange={(e) => {
          setSortMethod(`${e.target.value}`);
        }}>
        <option value="recommanded">Recommanded</option>
        <option value="low">Price - Low to high</option>
        <option value="high">Price - High to low</option>
      </select>
    </div>
  );
};

export default Sort;

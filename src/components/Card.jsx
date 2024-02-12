import Item from "./Item";

import "./Card.scss";

const Card = ({ day, exercises }) => {
  return (
    <div className="card">
      <div>
        <h2>{day}</h2>
      </div>
      <div className="main-infomation">
        {exercises === "Военная подготовка" ? (
          <h3>{"Военная подготовка"}</h3>
        ) : (
          exercises.map((_l, index) => (
            <Item
              time={_l.time}
              numerator={_l?.numerator || ""}
              denominator={_l?.denominator || ""}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Card;

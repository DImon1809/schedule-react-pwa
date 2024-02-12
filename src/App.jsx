import React, { useState, useEffect } from "react";
import { schedule } from "./data/schedule";

import Card from "./components/Card";
import Navigation from "./components/Navigation";
import Loader from "./components/Loader";

import "./App.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <section className="main-section">
            <div className="instructions">
              <div className="instructions-red">
                <div className="red"></div>
                <h4>Числитель</h4>
              </div>
              <div className="instructions-lime">
                <div className="lime"></div>
                <h4>Знаменатель</h4>
              </div>
            </div>
            <div className="cards">
              {schedule.map((_l, index) => (
                <Card day={_l.day} exercises={_l.exercises} key={index} />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default App;

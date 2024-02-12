import { useSelector } from "react-redux";
import React, { useEffect, useState, useCallback } from "react";

import "./Item.scss";

const Item = ({ time, numerator, denominator }) => {
  const {
    highlightNumetator,
    highlightDenominator,
    highlightLaboratory,
    highlightTeacher,
  } = useSelector((state) => state.uIhighlight);
  const [activeNumerator, setActiveNumerator] = useState(false);
  const [activeDenominator, setActiveDenominator] = useState(false);
  const [opacity, setOpacity] = useState(false);

  const mutateStateHandler = useCallback(
    (boolNumerator, boolDenominator, boolOpacity) => {
      setActiveNumerator(boolNumerator);
      setActiveDenominator(boolDenominator);
      setOpacity(boolOpacity);
    },
    []
  );

  const checkRegExp = useCallback(
    (_reg) => {
      numerator.match(_reg)?.length && setActiveNumerator(true);

      denominator.match(_reg)?.length && setActiveDenominator(true);
    },
    [numerator, denominator]
  );

  useEffect(() => {
    if (highlightNumetator) {
      return mutateStateHandler(true, false, true);
    }

    if (highlightDenominator) {
      return mutateStateHandler(false, true, true);
    }

    if (highlightLaboratory) {
      mutateStateHandler(false, false, true);

      return checkRegExp(new RegExp("лаб.", "gi"));
    }

    if (highlightTeacher) {
      mutateStateHandler(false, false, true);

      return checkRegExp(new RegExp(highlightTeacher, "gi"));
    }

    return mutateStateHandler(false, false, false);
  }, [
    highlightNumetator,
    highlightDenominator,
    highlightLaboratory,
    highlightTeacher,
    numerator,
    denominator,
    mutateStateHandler,
    checkRegExp,
  ]);

  return (
    <div className="item">
      <div
        className={
          (activeNumerator && numerator && "date-divider red") ||
          (activeDenominator && denominator && "date-divider lime") ||
          "date-divider"
        }
      >
        <p>{time}</p>
      </div>
      <div className="exercise">
        <p
          className={
            opacity
              ? activeNumerator
                ? "numerator active"
                : "numerator opacity"
              : "numerator"
          }
        >
          {numerator}
        </p>
        <p
          className={
            opacity
              ? activeDenominator
                ? "denominator active"
                : "denominator opacity"
              : "denominator"
          }
        >
          {denominator}
        </p>
      </div>
    </div>
  );
};

export default Item;

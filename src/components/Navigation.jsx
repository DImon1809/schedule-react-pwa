import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setHighlightNumerator,
  setHighlightDenominator,
  setHighlightLaboratory,
  setHighlightTeacher,
} from "../features/uiSlice";

import NavigationItems from "./NavigationItems";
import NavigationByTeachers from "./NavigationByTeachers";

import "./Navigation.scss";

const Navigation = () => {
  const dispatcher = useDispatch();
  const [active, setActive] = useState(false);
  const [activeTeachers, setActiveTeachers] = useState(false);

  const clickOnPlusHandler = () => {
    if (activeTeachers) {
      setActiveTeachers(false);

      return setTimeout(() => {
        setActive(!active);
      }, 500);
    }

    setActive(!active);
  };

  const mutateStateHandler = (
    boolNumerator,
    boolDenominator,
    boolLaboratory,
    strTeacher
  ) => {
    dispatcher(setHighlightNumerator(boolNumerator));
    dispatcher(setHighlightDenominator(boolDenominator));
    dispatcher(setHighlightLaboratory(boolLaboratory));
    dispatcher(setHighlightTeacher(strTeacher));
  };

  const onClickAllNumHandler = () => {
    mutateStateHandler(false, false, false, "");

    clickOnPlusHandler();
  };

  const onClickNumeratorHandler = () => {
    mutateStateHandler(true, false, false, "");

    clickOnPlusHandler();
  };

  const onClickDenominatorHandler = () => {
    mutateStateHandler(false, true, false, "");

    clickOnPlusHandler();
  };

  const onClickLaboratoryHandler = () => {
    mutateStateHandler(false, false, true, "");

    clickOnPlusHandler();
  };

  const onClickTeachersHandler = () => setActiveTeachers(!activeTeachers);

  const onChangeTeacherHandler = (name) => {
    mutateStateHandler(false, false, false, name);
    dispatcher(setHighlightTeacher(name));

    clickOnPlusHandler();
  };

  return (
    <>
      <nav className="navigation">
        <div
          className={
            active ? "nav-items-container active" : "nav-items-container"
          }
        >
          <NavigationItems
            onClickAllNumHandler={onClickAllNumHandler}
            onClickNumeratorHandler={onClickNumeratorHandler}
            onClickDenominatorHandler={onClickDenominatorHandler}
            onClickLaboratoryHandler={onClickLaboratoryHandler}
            onClickTeachersHandler={onClickTeachersHandler}
          />

          <div
            className={
              activeTeachers
                ? "nav-teachers-container active"
                : "nav-teachers-container"
            }
          >
            <NavigationByTeachers
              onChangeTeacherHandler={onChangeTeacherHandler}
            />
          </div>
        </div>

        <div
          className={active ? "menu-plus active" : "menu-plus"}
          onClick={clickOnPlusHandler}
        >
          <img src="./images/menu.png" alt="#" />
        </div>
      </nav>
      <div
        onClick={clickOnPlusHandler}
        className={active ? "wrapper active" : "wrapper"}
      ></div>
    </>
  );
};

export default Navigation;

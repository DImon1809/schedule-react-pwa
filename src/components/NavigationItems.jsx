import "./NavigationItems.scss";

const NavigationItems = ({
  onClickAllNumHandler,
  onClickNumeratorHandler,
  onClickDenominatorHandler,
  onClickLaboratoryHandler,
  onClickTeachersHandler,
}) => {
  return (
    <ul className="nav-items">
      <li onClick={onClickAllNumHandler}>
        <h4>Показать все</h4>
      </li>
      <li onClick={onClickNumeratorHandler}>
        <h4>Числитель</h4>
      </li>
      <li onClick={onClickDenominatorHandler}>
        <h4>Знаменатель</h4>
      </li>
      <li onClick={onClickLaboratoryHandler}>
        <h4>Лабораторные</h4>
      </li>
      <li onClick={onClickTeachersHandler}>
        <h4>Преподаватели</h4>
      </li>
    </ul>
  );
};

export default NavigationItems;

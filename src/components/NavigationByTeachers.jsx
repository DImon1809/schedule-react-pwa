import "./NavigationByTeachers.scss";

const NavigationByTeachers = ({ onChangeTeacherHandler }) => {
  return (
    <ul className="nav-teachers">
      <li onClick={() => onChangeTeacherHandler("Грибов")}>
        <h4>Грибов</h4>
      </li>
      <li onClick={() => onChangeTeacherHandler("Романов")}>
        <h4>Романов</h4>
      </li>
      <li onClick={() => onChangeTeacherHandler("Цветков")}>
        <h4>Цветков</h4>
      </li>
      <li onClick={() => onChangeTeacherHandler("Чернов")}>
        <h4>Чернов</h4>
      </li>
      <li onClick={() => onChangeTeacherHandler("Дятлов")}>
        <h4>Дятлов</h4>
      </li>
    </ul>
  );
};

export default NavigationByTeachers;

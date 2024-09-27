import PsychologistItem from "../PsychologistItem/PsychologistItem";
import css from "./PsychologistList.module.css";

const PsychologistList = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li key={item.name}>
            <PsychologistItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default PsychologistList;

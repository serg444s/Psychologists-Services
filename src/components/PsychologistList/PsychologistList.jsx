import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import PsychologistItem from "../PsychologistItem/PsychologistItem";
import css from "./PsychologistList.module.css";

const PsychologistList = ({ items, loadMore }) => {
  return (
    <>
      <ul className={css.list}>
        {items.map((item) => {
          return (
            <li key={item.name}>
              <PsychologistItem item={item} />
            </li>
          );
        })}
      </ul>
      <LoadMoreBtn onLoadMore={loadMore} />
    </>
  );
};

export default PsychologistList;

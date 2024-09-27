import IconSvg from "../IconSvg/IconSvg";
import css from "./PsychologistItem.module.css";

const PsychologistItem = ({ item }) => {
  return (
    <div className={css.container}>
      <div className={css.imgwrap}>
        <img
          alt={item.name || "Psychologist"}
          src={item.avatar_url}
          className={css.img}
        />
      </div>
      <div>
        <p className={css.psychologist}>Psychologist</p>
        <h2 className={css.name}>{item.name}</h2>

        <div className={css.details}>
          <p className={css.reviews}>
            <IconSvg width={16} height={16} iconName={"star"} />
            {`Raiting: ${item.rating}`}
          </p>
          <p className={css.reviews}>
            {" "}
            {`Price/1our: ${item.price_per_hour}$`}
          </p>
          <IconSvg width={24} height={24} iconName={"hart"} />
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <p>Experience: </p>
            <span>{item.experience}</span>
          </li>
          <li className={css.item}>
            <p>License: </p>
            <span>{item.license}</span>
          </li>
          <li className={css.item}>
            <p>Specialization: </p>
            <span>{item.specialization}</span>
          </li>
          <li className={css.item}>
            <p>Initial consultation: </p>
            <span>{item.initial_consultation}</span>
          </li>
        </ul>
        <p className={css.text}>{item.about}</p>
        <button
          className={css.btn}
          onClick={() => {
            console.log(item);
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default PsychologistItem;

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
      <div className={css.item}>
        <p className={css.psychologist}>Psychologist</p>
        <div className={css.title}>
          <h2 className={css.name}>{item.name}</h2>
          <h3 className={css.price}>{item.price_per_hour}</h3>
        </div>

        <div className={css.location}>
          <p className={css.reviews}>
            <IconSvg width={16} height={16} iconName={"star"} />
            {item.rating} ({item.reviews.length} Reviews)
          </p>
        </div>
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

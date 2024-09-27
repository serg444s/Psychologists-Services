import { useState } from "react";
import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./ReviewsList.module.css";

const ReviewList = ({ reviews }) => {

    const [showForm, setShowForm] = useState(false)

    function makeAppointment() { 
        setShowForm(true)
    }

  return (
    <>
      <ul className={css.list}>
        {reviews.map((review, index) => {
          return (
            <li key={index} className={css.item}>
              <ReviewItem review={review} />
            </li>
          );
        })}
      </ul>
          <button type="button" onClick={makeAppointment} className={ css.btn}>
        Make an appointment
      </button>
    </>
  );
};

export default ReviewList;

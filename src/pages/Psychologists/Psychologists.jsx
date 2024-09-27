import { useEffect, useState } from "react";
import PsychologistList from "../../components/PsychologistList/PsychologistList";
import { firstPageQuery } from "../../firebase-db";
import { get } from "firebase/database";
// import data from "../../../psychologists.json";

const Psychologists = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    get(firstPageQuery)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const psychologistsArray = Array.isArray(data)
            ? data
            : Object.values(data);
          setItems(psychologistsArray);
        } else {
          console.log("Нет данных");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <PsychologistList items={items} />
    </div>
  );
};

export default Psychologists;

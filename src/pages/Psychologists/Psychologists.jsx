import { useEffect, useState } from "react";
import PsychologistList from "../../components/PsychologistList/PsychologistList";
import { firstPageQuery } from "../../firebase-db";
import { get } from "firebase/database";
// import data from "../../../psychologists.json";

const Psychologists = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Выполняем запрос и обрабатываем данные
    get(firstPageQuery)
      .then((snapshot) => {
        console.log("snapshot", snapshot);

        if (snapshot.exists()) {
          console.log("snapshot.exists", snapshot.exists());

          console.log(snapshot.val()); // Данные первой страницы
          setItems(snapshot.val());
        } else {
          console.log("Нет данных");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только один раз

  return (
    <div>
      <PsychologistList items={items} />
    </div>
  );
};

export default Psychologists;

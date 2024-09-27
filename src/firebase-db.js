import {
  getDatabase,
  ref,
  get,
  query,
  orderByChild,
  limitToFirst,
  startAfter,
} from "firebase/database";

// Получаем базу данных
const db = getDatabase();

// Создаем запрос к Firebase Realtime Database
export const firstPageQuery = query(
  ref(db, "psychologists"),
  orderByChild("name"),
  limitToFirst(5)
);

// Предположим, ты получил данные первой страницы и у тебя есть ключ последнего элемента
const lastItemName = "Имя последнего психолога на первой странице";

// Создаем запрос для следующей страницы
const nextPageQuery = query(
  ref(db, "/"),
  orderByChild("name"),
  startAfter(lastItemName), // Начать с последнего элемента предыдущей страницы
  limitToFirst(5) // Ограничить до 5 элементов
);

// Выполняем запрос
get(nextPageQuery)
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val()); // Данные следующей страницы
    } else {
      console.log("Нет данных");
    }
  })
  .catch((error) => {
    console.error(error);
  });

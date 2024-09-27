import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.main}>
        <h1 className={css.title}>
          The road to the <span>depths</span> of the human soul
        </h1>
        <p className={css.text}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <Link to="/psychologists" className={css.link}>
          Get started
        </Link>
      </div>
      <div className={css.wrapper}></div>
    </div>
  );
};

export default Home;

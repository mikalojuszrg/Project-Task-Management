import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import { REGISTER_PATH } from "../../routes/const";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.container__heading}>TASK MANAGER</h1>
      <Login />
      <p className={styles.container__info}>
        Don't have an account?<Link to={REGISTER_PATH}> Sign up</Link>
      </p>
    </section>
  );
};

export default Home;

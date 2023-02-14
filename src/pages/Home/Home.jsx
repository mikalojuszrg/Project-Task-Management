import Login from "../../components/Login/Login";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.container__heading}>Task Manager</h1>
      <Login />
    </section>
  );
};

export default Home;

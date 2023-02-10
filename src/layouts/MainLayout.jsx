import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainLayout;

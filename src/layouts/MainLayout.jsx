import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}> {children}</div>
    </div>
  );
};

export default MainLayout;

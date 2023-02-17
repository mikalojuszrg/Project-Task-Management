import styles from "../components/Button/Button.module.scss";

export const buttonClassNames = {
  primary: [styles["button--primary"], styles["button"]],
  secondary: [styles["button--secondary"], styles["button"]],
  tertiary: [styles["button--tertiary"], styles["button"]],
  general: [styles["button--general"], styles["button"]],
  important: [styles["button--important"], styles["button"]],
  completed: [styles["button--completed"], styles["button"]],
  generalOn: [styles["button--generalOn"], styles["button"]],
  importantOn: [styles["button--importantOn"], styles["button"]],
  completedOn: [styles["button--completedOn"], styles["button"]],
};

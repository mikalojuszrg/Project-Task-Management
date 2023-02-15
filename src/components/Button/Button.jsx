import styles from "./Button.module.scss";
import { buttonClassNames } from "../../consts/buttonClassNames";
import classNames from "classnames";

const cn = classNames.bind(styles);

const Button = ({ children, onClick, variant }) => {
  const classes = buttonClassNames[variant];
  return (
    <button onClick={onClick} className={cn(...classes)}>
      {children}
    </button>
  );
};

export default Button;

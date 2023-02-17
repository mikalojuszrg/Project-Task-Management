import Button from "../Button/Button";
import styles from "./UpdateInput.module.scss";

const UpdateInput = ({ value, onChange, onClick }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.container__input}
        value={value}
        onChange={onChange}
        maxLength="24"
      />
      <Button variant="tertiary" onClick={onClick}>
        save
      </Button>
    </div>
  );
};

export default UpdateInput;

import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={styles.error}>
      <p className={styles.message}>😵 Error fetching images. Please try again later.</p>
    </div>
  );
};

export default ErrorMessage;

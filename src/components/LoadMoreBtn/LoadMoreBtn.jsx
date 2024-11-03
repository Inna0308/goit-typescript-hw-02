import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div>
      <button className={styles.button} onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;

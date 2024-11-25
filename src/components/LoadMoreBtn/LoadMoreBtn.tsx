import { LoadMoreBtnProps } from "../types";

import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <div>
      <button className={styles.button} onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;

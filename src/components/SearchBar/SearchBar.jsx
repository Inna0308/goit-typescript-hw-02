import toast from "react-hot-toast";

import styles from "./SearchBar.module.css";

const SearchBar = ({ setSearchValue, resetSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const userValue = event.target.elements.input.value.trim();

    if (!userValue) {
      toast.error("This field must be filled.");
      return;
    }
    resetSearch();
    setSearchValue(userValue);
    event.target.reset();
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

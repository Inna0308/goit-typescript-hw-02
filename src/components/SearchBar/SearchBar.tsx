import toast from "react-hot-toast";

import { SearchBarProps } from "../types";

import styles from "./SearchBar.module.css";
import { FormEvent } from "react";

const SearchBar: React.FC<SearchBarProps> = ({ setSearchValue, resetSearch }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const userValue = (form.elements.namedItem("input") as HTMLInputElement).value.trim();

    if (!userValue) {
      toast.error("This field must be filled.");
      return;
    }
    resetSearch();
    setSearchValue(userValue);
    form.reset();
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

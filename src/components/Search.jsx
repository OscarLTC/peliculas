import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export function Search() {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handlerSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search ?? ""}
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;
            setQuery({ search: value });
          }}
        />
        <FaSearch color="black" size={20} className={styles.searchButtom} />
      </div>
    </form>
  );
}

import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const history = useHistory();

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handlerSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search}
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;
            history.push("/?search=" + value);
          }}
        />
        <FaSearch color="black" size={20} className={styles.searchButtom} />
      </div>
    </form>
  );
}

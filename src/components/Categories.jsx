import styles from "../css/Menu.module.css";
const Categories = ({ categories, filterItems }) => {
  return (
    <div className={styles["btn-container"]}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={styles["filter-btn"]}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

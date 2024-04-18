import { useState } from "react";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import menuData from "../data/MenuData";
import styles from "../css/Menu.module.css";

const allCategories = ["all", ...new Set(menuData.map((item) => item.category))];

function MenuPage() {
  const [menuItems, setMenuItems] = useState(menuData);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menuData);
      return;
    }
    const newItems = menuData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className={`${styles["section"]} ${styles["menu"]}`}>
        <div className={styles["title"]}>
          <h2>our menu</h2>
          <div className={styles["underline"]}></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuPage;
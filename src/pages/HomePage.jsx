import { Link } from "react-router-dom";
import styles from "../css/Home.module.css";

function HomePage() {
  return (
    <div className={styles["container"]}>
      <h1>Trang Home</h1>
      <div className={styles["button-container"]}>
        <Link to="/birthday-reiminder">
          <div className={styles["button"]}>Birthday reminder</div>
        </Link>
        <Link to="/tours">
          <div className={styles["button"]}>Tours</div>
        </Link>
        <Link to="/reviews">
          <div className={styles["button"]}>Reviews</div>
        </Link>
        <Link to="/accordion">
          <div className={styles["button"]}>Accordion</div>
        </Link>
        <Link to="/menu">
          <div className={styles["button"]}>Menu</div>
        </Link>
        <Link to="/tabs">
          <div className={styles["button"]}>Tabs</div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;